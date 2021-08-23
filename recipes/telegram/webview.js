// Code copied from: https://gitlab.com/gortega4/ferdi_recipes

const path = require('path');

module.exports = Franz => {
  const getMessages = function getMessages() {
    let count = 0;
    let count_sec = 0;
    const elements = document.querySelectorAll('.rp');
    for (let i = 0; i < elements.length; i += 1) {
      const subtitleBadge = elements[i].querySelector('.dialog-subtitle-badge');
      if (subtitleBadge) {
        const parsedValue = parseInt(subtitleBadge.innerText);
        if (!isNaN(parsedValue)) {
          if (elements[i].dataset.peerId > 0) {
            count += parsedValue;
          } else {
            count_sec += parsedValue;
          }
        }
      }
    }

    Franz.setBadge(count, count_sec);
  };

  Franz.injectCSS(path.join(__dirname, 'service.css'));
  Franz.loop(getMessages);
};
