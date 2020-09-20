'use strict';

module.exports = Franz => {
  const getMessages = function getMessages() {
    const elements = document.querySelectorAll('.unreadCount');
    const unread = document.querySelector('.cu-notification-alert__dot');
    Franz.setBadge(unread ? 1 : 0);
  };

  Franz.loop(getMessages);
};
