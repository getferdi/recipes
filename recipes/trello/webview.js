module.exports = Ferdi => {
  const getMessages = function getMessages() {
    const notifications = document.querySelectorAll('[class*=_3W-zkl4-bnVKzJ]');
    Ferdi.setBadge(0, notifications.length >= 1 ? 1 : 0);
  };

  Ferdi.loop(getMessages);
};
