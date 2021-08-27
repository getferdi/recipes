module.exports = Ferdi => {
  const getMessages = function getMessages() {
    const notifications = document.querySelectorAll('.notification--number');

    Ferdi.setBadge(0, notifications.length >= 1 ? 1 : 0);
  };

  Ferdi.loop(getMessages);
};
