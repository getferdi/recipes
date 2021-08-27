module.exports = (Ferdi) => {
  function getMessages() {
    let direct = 0;
    const indirect = 0;
    const badgeDiv = document.querySelector('.notion-sidebar-container > div > div > div > :nth-child(4) > :nth-child(2) > div > :nth-child(3) > div > div');
    if (badgeDiv) {
      direct = parseInt(badgeDiv.innerText);
    }

    Ferdi.setBadge(direct, indirect);
  }

  Ferdi.loop(getMessages);
};
