const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Ferdi => {
  const getMessages = function getMessages() {
    // get all message badges
    const allBadges = document.querySelectorAll('.activity-indicator');
    let directCount = 0;
    let indirectCount = 0;

    // get unread direct messages by tring to read the badge values
    allBadges.forEach(item => {
      if (item.hasAttribute('data-count')) {
        // Count for DMs should be in the data-count attribute
        directCount += Math.max(1, +item.getAttribute('data-count'));
      } else {
        // this will be the case for indirect messages
        indirectCount++;
      }
    });

    // set Ferdi badge
    Ferdi.setBadge(directCount, indirectCount);
  };

  Ferdi.loop(getMessages);

  Ferdi.injectCSS(_path.default.join(__dirname, 'service.css'));
};
