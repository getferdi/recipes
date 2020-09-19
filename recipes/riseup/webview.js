"use strict";

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Ferdi => {
  const getMessages = function getMessages() {
    var unread = 0
    const notificationBadge = document.getElementsByClassName('unreadcount')[0]
    if (notificationBadge != undefined) {
        unread = notificationBadge.innerText;
    }
    Ferdi.setBadge(parseInt(unread, 10));
  };

  Ferdi.loop(getMessages);
};
