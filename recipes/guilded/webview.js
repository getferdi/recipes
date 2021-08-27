module.exports = Ferdi => {
  const getMessages = function getMessages() {
    let unread = 0;
    const notificationBadge = document.getElementsByClassName('NavSelectorItem-unread-badge')[0];
    if (notificationBadge != undefined) {
      const innerBadge = notificationBadge.getElementsByClassName('BadgeV2-count')[0];
      unread = innerBadge.innerText;
    }
    Ferdi.setBadge(parseInt(unread, 10));
  };

  Ferdi.loop(getMessages);
};
