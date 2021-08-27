module.exports = (Ferdi) => {
  function getMessages() {
    const hasNotifications = document.querySelector('#notifications-link .badge').classList.contains('visible');
    Ferdi.setBadge(0, hasNotifications ? 1 : 0);
  }

  Ferdi.loop(getMessages);
};
