module.exports = Ferdi => {
  // Regular expression for (*) or (1), will extract the asterisk or the number
  const titleRegEx = /^\(([\*\d])\)/;
  const getMessages = function unreadCount() {
    let directCount = 0;
    let indirectCount = 0;

    const matchArr = document.title.match(titleRegEx);
    if (matchArr) {
      if (matchArr[1] === '*') {
        indirectCount = 1;
      } else {
        directCount = Number(matchArr[1]);
      }
    }

    Ferdi.setBadge(directCount, indirectCount);
  };

  Ferdi.loop(getMessages);
};
