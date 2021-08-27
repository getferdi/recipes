const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Ferdi => {
  const getMessages = () => {
    const updates = parseInt(document.querySelector('i#sr-last-counter').textContent, 10);
    let messages = 0;

    const conversations = document.querySelectorAll('.chat-counter:not(.d-none)').length;
    if (conversations === 0) {
      messages = 0;
    } else {
      for (let i = 0; i < conversations; i + 1) {
        messages += parseInt(document.querySelectorAll('.chat-counter:not(.d-none)')[i].textContent, 10);
      }
    }

    Ferdi.setBadge(messages, updates);
  };

  Ferdi.loop(getMessages);

  Ferdi.injectCSS(_path.default.join(__dirname, 'service.css'));
};
