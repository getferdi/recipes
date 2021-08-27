const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (Ferdi) => {
  const getMessages = () => {
    const unreadNotifications = parseInt(document.getElementById('notifications_amount').innerHTML);
    Ferdi.setBadge(unreadNotifications);
  };

  Ferdi.loop(getMessages);

  Ferdi.injectCSS(_path.default.join(__dirname, 'css', 'franz.css'));
};
