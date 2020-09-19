"use strict";

module.exports = Franz => {
  const getMessages = function getMessages() {
    let directMessages = 0;
    let indirectMessages = 0;
    const notificationElement = document.querySelector(".yj-notifications-indicator-count");
    const newMessagesElement = document.querySelector(".yj-thread-list--new-messages-notice:not(.is-hidden) .yj-thread-list--new-message-text");

    if (notificationElement && notificationElement.innerHTML.length) {
      directMessages = parseInt(notificationElement.innerHTML, 10);
    }

    if (newMessagesElement && newMessagesElement.innerHTML.length) {
      indirectMessages = parseInt(newMessagesElement.innerHTML.match(/\d+/)[0], 10);
    }

    Franz.setBadge(directMessages, indirectMessages);
  };

  Franz.loop(getMessages);
};