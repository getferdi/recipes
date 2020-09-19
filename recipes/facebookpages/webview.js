"use strict";

module.exports = (Franz, options) => {
  const getMessages = function getMessages() {
    let messages = 0;
    const element = document.querySelector('[data-testid="message_count"] span');

    if (element) {
      messages = parseInt(element.textContent, 10);
    }

    if (isNaN(messages)) {
      messages = 0;
    }

    Franz.setBadge(messages);
  };

  Franz.loop(getMessages);
  setTimeout(() => {
    if (document.body && !document.body.classList.contains('UIPage_LoggedOut')) {
      if (localStorage.getItem('franz-needsRedirect')) {
        window.location.href = `https://facebook.com/${options.team}/inbox`;
        localStorage.removeItem('franz-needsRedirect');
      }
    } else {
      localStorage.setItem('franz-needsRedirect', true);
    }
  }, 500);
};