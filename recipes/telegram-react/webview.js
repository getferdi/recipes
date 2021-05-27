"use strict";

module.exports = Franz => {
  const getMessages = function getMessages() {
    let count = 0;
    const elements = document.querySelectorAll(".chatlist > li:not(.is-muted)");
    if (elements) {
      for (let i = 0; i < elements.length; i += 1) {
        if (elements[i].querySelector(".unread") && elements[i].querySelector(".unread").innerHTML !== 0) {
          count += parseInt(elements[i].querySelector(".unread").innerHTML);
        }
      }
    }
    Franz.setBadge(count);
  };
  Franz.loop(getMessages);
};
