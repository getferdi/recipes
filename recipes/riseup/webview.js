module.exports = Ferdi => {
  const getMessages = function getMessages() {
    let unread = 0;
    const notificationBadge = document.getElementsByClassName('unreadcount')[0];
    if (notificationBadge != undefined) {
      unread = notificationBadge.innerText;
    }
    Ferdi.setBadge(parseInt(unread, 10));
  };

  Ferdi.loop(getMessages);
};
