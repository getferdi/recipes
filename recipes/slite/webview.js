"use strict";

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Ferdi => {
  const getMessages = function getMessages() {
    let direct = 0;

    const notificationButton = document.querySelector(
      "#app button[data-test-id='notificationsCount'"
    );

    if (notificationButton) {
      const notificationCount = parseInt(notificationButton.innerText);
      direct = isNaN(notificationCount) ? 0 : notificationCount;
    }

    Ferdi.setBadge(direct);
  };

  Ferdi.loop(getMessages);
};
