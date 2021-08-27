module.exports = (Ferdi) => {
  const getMessages = function getMessages() {
    // get unread messages
    const element = document.querySelector('#atlassian-navigation-notification-count span');
    let count = element ? element.innerText : 0;
    count = parseInt(count, 10);

    Ferdi.setBadge(count);
  };

  Ferdi.loop(getMessages);
};
