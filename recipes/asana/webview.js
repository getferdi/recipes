const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Ferdi => {
  const getMessages = function getMessages() {
    const hasNotification = document.querySelectorAll('.SidebarTopNavLinks-notificationsButton--hasNewNotifications');
    Ferdi.setBadge(hasNotification.length > 0 ? 1 : 0);
  };

  Ferdi.loop(getMessages);

  Ferdi.injectCSS(_path.default.join(__dirname, 'service.css'));
};
