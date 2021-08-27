module.exports = (Ferdi) => {
  function getMessages() {
    let indirectCount = 0;
    const badge = document.getElementById('numNotifs2');

    if (badge && badge.innerText) {
      indirectCount = parseInt(badge.innerText);
    }

    Ferdi.setBadge(0, indirectCount);
  }

  Ferdi.loop(getMessages);
};
