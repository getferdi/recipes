const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Ferdi => {
  const getMessages = function getMessages() {
    let direct = 0;
    const notificationWrapper = document.querySelector(
      '.notifications .notification-wrapper',
    );

    if (notificationWrapper) {
      direct = notificationWrapper.querySelectorAll(
        '.notification[object_type="chat"], .notification[object_type="room"',
      ).length;
    }

    let indirect = 0;

    document.querySelectorAll('.app-navigation-entry__counter').forEach(
      (counter) => {
        indirect += Number(counter.textContent);
      },
    );
    Ferdi.setBadge(direct, indirect);
  };

  Ferdi.loop(getMessages);

  Ferdi.injectCSS(_path.default.join(__dirname, 'service.css'));
};
