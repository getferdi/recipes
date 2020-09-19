"use strict";

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Franz => {
  const getMessages = function getMessages() {
    const direct = document.querySelectorAll('.app-navigation-entry-utils-counter.highlighted').length;
    const indirect = document.querySelectorAll('.app-navigation-entry-utils-counter:not(.highlighted)').length;
    Franz.setBadge(direct, indirect);
  };

  Franz.loop(getMessages);
  Franz.injectCSS(_path.default.join(__dirname, 'service.css'));
};