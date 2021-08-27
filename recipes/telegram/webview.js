// Code copied from: https://gitlab.com/gortega4/ferdi_recipes

const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Ferdi => {
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

    Ferdi.setBadge(count, count_sec);
  };

  Ferdi.loop(getMessages);

  Ferdi.injectCSS(_path.default.join(__dirname, 'service.css'));
};
