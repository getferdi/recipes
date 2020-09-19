"use strict";

module.exports = Franz => {
  const getMessages = function getMessages() {
    var unread = 0
    const notificationBadge = document.getElementsByClassName('notification-badge')[0]
    if (notificationBadge != undefined) {
        unread = notificationBadge.innerText;
    }
    Franz.setBadge(parseInt(unread, 10));
  };

  Franz.loop(getMessages);
};