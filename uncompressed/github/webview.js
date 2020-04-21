"use strict";

module.exports = Franz => {
  const getMessages = function getMessages() {
    Franz.setBadge(document.querySelector('[class*="mail-status unread"]') !== null ? 1 : 0);
  };

  Franz.loop(0, getMessages);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnaXRodWIvd2Vidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbXX0=