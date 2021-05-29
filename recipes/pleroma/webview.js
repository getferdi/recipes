module.exports = (Ferdi) => {
  const titleRegex = /^\((\d+)\)/;

  const getMessages = () => {
    let directCount = 0;
    const matchArr = document.title.match(titleRegex);
    if (matchArr) {
      directCount = parseInt(matchArr[1], 10);
    }
    Ferdi.setBadge(directCount, 0);
  };

  Ferdi.loop(getMessages);
};
