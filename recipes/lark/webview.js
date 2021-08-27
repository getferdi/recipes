const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (Ferdi) => {
  const getMessages = function getMessages() {
    const ele = document.querySelectorAll('.larkc-badge-count.navbarMenu-badge');
    if (!ele.length) {
      Ferdi.setBadge(0);
      return;
    }
    const messages = parseInt(ele[0].innerHTML, 10);
    Ferdi.setBadge(messages);
  };

  Ferdi.loop(getMessages);

  Ferdi.injectCSS(_path.default.join(__dirname, 'service.css'));
};
