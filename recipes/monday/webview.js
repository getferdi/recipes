const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Ferdi => {
  const getMessages = function getMessages() {
    let count = 0;

    const counters = document.querySelectorAll('.surface-control-component .item-counter, .surface-control-component .view-item-counter');

    for (let i = 0; i < counters.length; i++) {
      count += parseInt(counters[i].textContent);
    }

    Ferdi.setBadge(count);
  };

  Ferdi.loop(getMessages);

  Ferdi.injectCSS(_path.default.join(__dirname, 'service.css'));
};
