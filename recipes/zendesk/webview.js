const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Ferdi => {
  const getMessages = () => {
    let count = 0;
    const el = document.querySelector('.dashboard-top-panel .indicators .stats-group .cell-value');

    if (el) {
      count = parseInt(el.innerHTML, 10);
    }

    Ferdi.setBadge(count);
  };

  Ferdi.loop(getMessages);

  Ferdi.injectCSS(_path.default.join(__dirname, 'service.css'));
};
