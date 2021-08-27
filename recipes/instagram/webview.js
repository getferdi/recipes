const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (Ferdi) => {
  const getMessages = function getMessages() {
    const element = document.querySelector('a[href^="/direct/inbox"]');
    Ferdi.setBadge(element ? parseInt(element.innerText, 10) : 0);
  };

  Ferdi.loop(getMessages);

  Ferdi.injectCSS(_path.default.join(__dirname, 'service.css'));
};
