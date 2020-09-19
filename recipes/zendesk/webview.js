"use strict";

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Franz => {
  const getMessages = () => {
    let count = 0;
    const el = document.querySelector('.dashboard-top-panel .indicators .stats-group .cell-value');

    if (el) {
      count = parseInt(el.innerHTML, 10);
    }

    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
  Franz.injectCSS(_path.default.join(__dirname, 'service.css'));
};