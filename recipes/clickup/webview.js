module.exports = Ferdi => {
  const getMessages = function getMessages() {
    const elements = document.querySelectorAll('.unreadCount');
    const unread = document.querySelector('.cu-notification-alert__dot');
    Ferdi.setBadge(unread ? 1 : 0);
  };

  Ferdi.loop(getMessages);
};
