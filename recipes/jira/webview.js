"use strict";

module.exports = (Franz) => {
  const getMessages = function getMessages() {
    // get unread messages
    let element = document.querySelector('#atlassian-navigation-notification-count span');
    let count = element ? element.innerText : 0;
    count = parseInt(count, 10);

    // set Franz badge
    Franz.setBadge(count);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};