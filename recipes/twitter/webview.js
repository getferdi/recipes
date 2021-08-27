module.exports = Ferdi => {
  const getMessages = () => {
    let direct = 0;

    // "Notifications" and "Messages" - aria-label ending in
    // "unread items". Sum the values for direct badge.
    const notificationsElement = document.querySelector('[data-testid=AppTabBar_Notifications_Link] div div div');
    if (notificationsElement) {
      direct += notificationsElement.innerHTML;
    }
    const DMElement = document.querySelector('[data-testid=AppTabBar_DirectMessage_Link] div div div');
    if (DMElement) {
      direct += DMElement.innerHTML;
    }

    Ferdi.setBadge(direct);
  };

  Ferdi.loop(getMessages);
};
