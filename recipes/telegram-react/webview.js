"use strict";

const path = require("path");

module.exports = Franz => {
  const getMessages = function getMessages() {
    let count = 0;
    const elements = document.querySelectorAll('.dialog-subtitle-badge.badge.badge-24.unread');
    if (elements) {
      for (let i = 0; i < elements.length; i += 1) {
				if (elements[i].outerText) {
					count ++;
				}
      }
    }
    Franz.setBadge(count);
  };
  Franz.loop(getMessages);
};
