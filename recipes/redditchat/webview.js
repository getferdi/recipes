'use strict';

module.exports = Franz => {
  // Regular expression for (*) or (1), will extract the asterisk or the number
  const titleRegEx = /^\(([\*\d])\)/;
  const getMessages = function unreadCount() {
    var directCount = 0;
    var indirectCount = 0;

    var matchArr = document.title.match(titleRegEx);
    if (matchArr) {
      if (matchArr[1] === '*') {
        indirectCount = 1;
      } else {
        directCount = Number(matchArr[1]);
      }
    }

    Franz.setBadge(directCount, indirectCount);
  }

  Franz.loop(getMessages);
};
