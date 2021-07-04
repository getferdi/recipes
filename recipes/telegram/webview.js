// Code copied from: https://gitlab.com/gortega4/ferdi_recipes

'use strict';

const path = require('path');

module.exports = Franz => {
  const getMessages = function getMessages() {
    let count = 0;
    const elements = document.querySelectorAll('.unread');
    if (elements) {
      for (let i = 0; i < elements.length; i += 1) {
        if (parseInt(elements[i].innerText)) {
          count += parseInt(elements[i].innerText)
        }
      }
    }

    Franz.setBadge(count);
  };

  Franz.injectCSS(path.join(__dirname, 'service.css'));
  Franz.loop(getMessages);
};
