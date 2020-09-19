"use strict";

module.exports = Franz => {
  const getMessages = function getMessages() {
    var unread = 0
    const notificationBadge = document.getElementsByClassName('NavSelectorItem-unread-badge')[0]
    if (notificationBadge != undefined) {
        const innerBadge = notificationBadge.getElementsByClassName('BadgeV2-count')[0]
        unread = innerBadge.innerText;
    }
    Franz.setBadge(parseInt(unread, 10));
  };

  Franz.loop(getMessages);
};