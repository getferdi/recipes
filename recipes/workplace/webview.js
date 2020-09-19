"use strict";

const path = require('path');

module.exports = Franz => {
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

    Franz.setBadge(direct, indirect);
  };

  Franz.injectCSS(path.join(__dirname, 'workplace.css'));
  Franz.loop(getMessages);
  localStorage._cs_desktopNotifsEnabled = JSON.stringify({
    __t: new Date().getTime(),
    __v: true
  });

  if (typeof Franz.onNotify === 'function') {
    Franz.onNotify(notification => {
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