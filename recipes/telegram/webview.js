// Code copied from: https://gitlab.com/gortega4/ferdi_recipes

'use strict';

const path = require('path');

module.exports = Franz => {
  const getMessages = function getMessages() {
    let count = 0;
    let count_sec = 0
    const elements = document.querySelectorAll('.rp');
    for (let i = 0; i < elements.length; i += 1) {
      if (elements[i].querySelector('.dialog-subtitle-badge') && (!isNaN(parseInt(elements[i].querySelector('.dialog-subtitle-badge').innerText)) )) {
        if (parseInt(elements[i].querySelector('.dialog-subtitle-badge').innerText) != "" && (elements[i].dataset.peerId > 0)) {
          count = +count + parseInt(elements[i].querySelector('.dialog-subtitle-badge').innerText)
        }
        else {
          count_sec = +count_sec + parseInt(elements[i].querySelector('.dialog-subtitle-badge').innerText)
        }
      }
    }

    Franz.setBadge(count, count_sec);
  };

  Franz.injectCSS(path.join(__dirname, 'service.css'));
  Franz.loop(getMessages);
};
