"use strict";

module.exports = Franz => {
  const getMessages = function getMessages() {
    const count = document.querySelectorAll('.switch_pane>.unread').length;
    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};