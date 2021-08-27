const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (Ferdi) => {
  const getMessages = () => {
    const inbox = document.querySelector('.v-MailboxSource--inbox .v-MailboxSource-badge');
    if (!inbox) {
      return;
    }
    const messages = Number(inbox.innerText);
    Ferdi.setBadge(messages);
  };

  Ferdi.loop(getMessages);

  Ferdi.injectJSUnsafe(_path.default.join(__dirname, 'webview-unsafe.js'));
};
