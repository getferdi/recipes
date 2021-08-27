module.exports = Ferdi => {
  const getMessages = function getMessages() {
    let count = 0;
    const elem = document.querySelector('a[href="/messages"] div div');

    if (elem) {
      count = parseInt(elem.innerText, 10);
    }

    Ferdi.setBadge(count);
  };

  Ferdi.loop(getMessages);
};
