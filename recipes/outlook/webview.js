module.exports = Ferdi => {
  function getMessages() {
    let unreadMail = 0;

    if (location.pathname.match(/\/owa/)) {
      // classic app
      unreadMail = parseInt(
        jQuery("span[title*='Inbox'] + div > span")
          .first()
          .text(),
        10,
      );
    } else {
      // new app
      const favorites = document.querySelector('div[title="Favorites"]');
      if (!favorites) {
        return;
      }
      const folders = Array.from(favorites.nextSibling.childNodes);

      unreadMail = folders.reduce((count, child) => {
        const unread = child.querySelector('.screenReaderOnly');
        return unread && unread.textContent === 'unread'
          ? count + parseInt(unread.previousSibling.textContent, 10)
          : count;
      }, 0);
    }

    Ferdi.setBadge(unreadMail);
  }

  Ferdi.loop(getMessages);
};
