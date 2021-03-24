"use strict";

module.exports = Franz => {
  const getMessages = function getMessages() {
    const notifications = document.querySelectorAll('.notification--number');

    Franz.setBadge(0, notifications.length >= 1 ? 1 : 0);
  };

  Franz.loop(getMessages);
};