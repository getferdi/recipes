'use strict';

const path = require('path');

module.exports = Franz => {
  const getMessages = () => {
    const totalNotifications = document.querySelectorAll('#notificationList > .notification').length;
    const hasUnread = document.querySelectorAll('#notificationsButton.hasUnread').length > 0;

    // set Franz badge
    if (hasUnread) {
      Franz.setBadge(totalNotifications);
    }
  };

  Franz.loop(getMessages);
};
