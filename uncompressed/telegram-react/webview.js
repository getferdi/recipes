"use strict";

const path = require("path");

module.exports = Franz => {
  const getMessages = function getMessages() {
    let count = 0;
    const elements = document.querySelectorAll(".dialog-badge-text");
    if (elements) {
      for (let i = 0; i < elements.length; i += 1) {
        if (elements[i].innerHTML !== 0) {
          count += parseInt(elements[i].innerHTML);
        }
      }
    }
    Franz.setBadge(count);
  };
  Franz.loop(getMessages);
};
