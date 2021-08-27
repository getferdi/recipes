module.exports = Ferdi => {
  const getMessages = () => {
    const totalNotifications = document.querySelectorAll('#notificationList > .notification').length;
    const hasUnread = document.querySelectorAll('#notificationsButton.hasUnread').length > 0;
    Ferdi.setBadge(hasUnread ? totalNotifications : 0);
  };

  Ferdi.loop(getMessages);
};
