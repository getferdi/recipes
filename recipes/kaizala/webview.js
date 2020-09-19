"use strict";

module.exports = Franz => {
  const getMessages = function getMessages() {
    const count = document.querySelectorAll('.unseen-msg-count').length;
    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};