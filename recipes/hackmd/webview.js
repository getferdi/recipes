const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (Ferdi) => {
  const getMessages = function getMessages() {
    // get unread messages
    const count = document.querySelectorAll('.guilds-wrapper .badge').length;

    // set Ferdi badge
    Ferdi.setBadge(count);
  };

  Ferdi.loop(getMessages);

  // Hide download message
  Ferdi.injectCSS(_path.default.join(__dirname, 'service.css'));
};
