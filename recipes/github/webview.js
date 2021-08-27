module.exports = Ferdi => {
  const getMessages = function getMessages() {
    const directCountElement = document.querySelector('.filter-list .count');
    const indirectCountElement = document.querySelector('[class*="mail-status unread"]');
    let directCount;
    let indirectCount;
    if (directCountElement) {
      directCount = parseInt(directCountElement.innerHTML, 10);
    } else if (indirectCountElement) {
      indirectCount = 1;
    }
    Ferdi.setBadge(directCount, indirectCount);
  };

  Ferdi.loop(getMessages);
};
