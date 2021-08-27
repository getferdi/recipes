module.exports = Ferdi => {
  const getMessages = function getMessages() {
    const directElements = document.querySelectorAll('.unreadcount');
    let direct = 0;
    for (let i = 0; i < directElements.length; i += 1) {
      const n = parseInt(directElements[i].innerHTML);
      direct += isNaN(n) ? 0 : n;
    }
    Ferdi.setBadge(direct);
  };

  Ferdi.loop(getMessages);
};
