"use strict";

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Franz => {

  const getMessages = function getMessages() {

    let count = 0;

    let counters = document.querySelectorAll('.surface-control-component .item-counter, .surface-control-component .view-item-counter');

    for (var i = 0; i < counters.length; i++) {
      count += parseInt(counters[i].textContent);
    }

    if (isNaN(count)) {
      count = 0;
    }
    
		Franz.setBadge(count);
	};

	Franz.injectCSS(_path.default.join(__dirname, 'service.css'));
	Franz.loop(getMessages);

};
