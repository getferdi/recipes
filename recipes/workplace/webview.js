const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Ferdi => {
  const getMessages = () => {
    let direct = 0;
    let indirect = 0;
    const chatsElement = document.querySelector('#chats');
    const notifications = document.querySelector('#notifications span span');

    if (notifications) {
      indirect = parseInt(notifications.innerText, 10);
    }

    if (chatsElement) {
      if (!chatsElement.hasAttribute('aria-current')) {
        const chatMessages = chatsElement.querySelector('span');

        if (chatMessages) {
          direct = parseInt(chatMessages.innerText, 10);
        }
      } else {
        direct = document.querySelectorAll('[data-pagelet="WorkGalahadChannel"] .uiList [role="gridcell"] [role="button"] .oxk9n0fw').length;
      }
    }

    Ferdi.setBadge(direct, indirect);
  };

  Ferdi.loop(getMessages);

  Ferdi.injectCSS(_path.default.join(__dirname, 'workplace.css'));

  localStorage._cs_desktopNotifsEnabled = JSON.stringify({
    __t: new Date().getTime(),
    __v: true,
  });

  if (typeof Ferdi.onNotify === 'function') {
    Ferdi.onNotify(notification => {
      if (typeof notification.title !== 'string') {
        notification.title = ((notification.title.props || {}).content || [])[0] || 'Work Chat';
      }

      if (typeof notification.options.body !== 'string') {
        notification.options.body = (((notification.options.body || {}).props || {}).content || [])[0] || '';
      }

      return notification;
    });
  }
};
