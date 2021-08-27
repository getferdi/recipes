module.exports = (Ferdi) => {
  function getTasks() {
    let todayCount = 0;
    let inboxCount = 0;
    const todayElement = document.querySelector('#filter_today .item_counter');
    const inboxElement = document.querySelector('#filter_inbox .item_counter');

    if (todayElement) {
      todayCount = parseInt(todayElement.innerHTML, 10);
    }

    if (inboxElement) {
      inboxCount = parseInt(inboxElement.innerHTML, 10);
    }

    Ferdi.setBadge(inboxCount, todayCount);
  }

  Ferdi.loop(getTasks);
};
