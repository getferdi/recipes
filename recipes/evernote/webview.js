const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (Ferdi) => {
  const getMessages = () => {
    const inbox = document.querySelector('.topbar-notificationsButton.has-newNotifications');
    const passiveCount = inbox === null ? 0 : 1;
    Ferdi.setBadge(0, passiveCount);
  };

  Ferdi.loop(getMessages);

  Ferdi.injectCSS(_path.default.join(__dirname, 'css', 'franz.css'));
};
