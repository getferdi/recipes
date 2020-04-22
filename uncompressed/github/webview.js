"use strict";

module.exports = Franz => {
  const getMessages = function getMessages() {
    const directCountElement = document.querySelector('.filter-list .count');
    const indirectCountElement = document.querySelector('[class*="mail-status unread"]')
    let directCount, indirectCount
    if (directCountElement) {
      directCount = parseInt(directCountElement.innerHTML, 10);
    } else {
      if (indirectCountElement) {
        indirectCount = 1;
      }
    }
    Franz.setBadge(directCount, indirectCount);
  };

  Franz.loop(getMessages);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnaXRodWIvd2Vidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbXX0=