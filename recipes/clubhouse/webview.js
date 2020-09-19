module.exports = (Ferdi) => {
  function getMessages() {
    const hasNotifications = document.querySelector('#notifications-link .badge').classList.contains('visible');
    if (hasNotifications) {
      Ferdi.setBadge(0, 1);
    }
  }

  Ferdi.loop(getMessages);
}
