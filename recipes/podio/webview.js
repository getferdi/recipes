const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (Ferdi) => {
  const getMessages = () => {
    const updates = document.getElementsByClassName('counter')[0].innerHTML;
    Ferdi.setBadge(updates, 0);
  };

  Ferdi.loop(getMessages);

  Ferdi.injectCSS(_path.default.join(__dirname, 'css', 'franz.css'));
};
