module.exports = Ferdi => {
  const getMessages = function getMessages() {
    let count = 0;

    const isNotification = /^\((\d+)\)/.test(document.title);

    /*
     * Notification case for group chats, workaround by tamas646
     * see https://github.com/getferdi/ferdi/issues/1113#issuecomment-783409154
     */
    if (isNotification) {
      count = parseInt(/^\((\d+)\)/.exec(document.title)[1]);
    } else {
      /*
      * Notification case for direct messages, workaround by manavortex
      * see https://github.com/getferdi/ferdi/issues/1113#issuecomment-846611765
      */
      count = document.querySelectorAll('._5fx8:not(._569x),._1ht3:not(._569x)').length;
      if (count === 0) {
        count = document.querySelectorAll('.pq6dq46d.is6700om.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.s45kfl79.emlxlaya.bkmhp75w.spb7xbtv.cyypbtt7.fwizqjfa').length;
      }
      if (count === 0) { // might be obsolete, not sure - never ran into this case
        count = document.querySelectorAll('[aria-label="Mark as read"]').length;
      }
    }
    /*
     * add count of message requests on top of notification counter
     */
    const messageRequestsElement = document.querySelector('._5nxf');
    if (messageRequestsElement) {
      count += parseInt(messageRequestsElement.innerHTML, 10);
    }

    Ferdi.setBadge(count);
  };

  Ferdi.loop(getMessages);

  localStorage.setItem('_cs_desktopNotifsEnabled', JSON.stringify({
    __t: new Date().getTime(),
    __v: true,
  }));

  if (typeof Ferdi.onNotify === 'function') {
    Ferdi.onNotify(notification => {
      if (typeof notification.title !== 'string') {
        notification.title = ((notification.title.props || {}).content || [])[0] || 'Messenger';
      }

      if (typeof notification.options.body !== 'string') {
        notification.options.body = (((notification.options.body || {}).props || {}).content || [])[0] || '';
      }

      return notification;
    });
  }
};
