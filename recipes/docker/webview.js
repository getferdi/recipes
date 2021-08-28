var _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Ferdi => {
  // TODO: If your docker hub service has unread messages, uncomment these lines to implement the logic for updating the badges
  // const getMessages = function getMessages() {
  //   // TODO: Insert your notification-finding code here
  //   Ferdi.setBadge(0, 0);
  // };
  // Ferdi.loop(getMessages);

  Ferdi.injectCSS(_path.default.join(__dirname, 'service.css'));
};
