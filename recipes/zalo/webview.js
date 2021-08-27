module.exports = Ferdi => {
  const getMessages = function getMessages() {
    const unread = 0;
    const notificationBadge = document.getElementsByClassName('tab-red-dot').length;
    Ferdi.setBadge(notificationBadge);
  };

  Ferdi.loop(getMessages);
};
