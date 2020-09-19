"use strict";

const path = require("path");

module.exports = Franz => {
  const getMessages = function getMessages() {
    let count = 0;
    const elements = document.querySelectorAll(".dialog-badge:not(.dialog-badge-muted)");
    if (elements) {
      for (let i = 0; i < elements.length; i += 1) {
        if (elements[i].querySelector("span").innerHTML !== 0) {
          count += parseInt(elements[i].querySelector("span").innerHTML);
        }
      }
    }
    Franz.setBadge(count);
  };
  Franz.loop(getMessages);
};
