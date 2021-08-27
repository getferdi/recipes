const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (Ferdi) => {
  function getMessages() {
    const count = document.querySelector('.user-menu-message-item-count').innerHTML;
    Ferdi.setBadge(count);
  }

  Ferdi.loop(getMessages);

  Ferdi.injectCSS(_path.default.join(__dirname, 'css', 'franz.css'));
};
