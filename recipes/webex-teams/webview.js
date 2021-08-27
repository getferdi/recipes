module.exports = (Ferdi) => {
  const getMessages = function getMessages() {
    let count = 0;

    let span = document.getElementsByClassName('navigation-list-item--badgeCount');

    if (span.length == 0) {
      span = document.getElementsByClassName('navigation-list-item--badgeCount-minimized');
    }

    if (span.length > 0) {
      count = parseInt(span[0].innerText, 10);
    }

    if (Number.isNaN(count)) {
      count = 0;
    }

    Ferdi.setBadge(count);
  };

  Ferdi.loop(getMessages);
};
