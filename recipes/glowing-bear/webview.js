module.exports = Ferdi => {
  const getMessages = function getMessages() {
    const indirectElements = document.querySelectorAll('.badge:not(.danger)');
    const direct = document.querySelectorAll('.badge.danger').length - 1;
    let indirect = -1;
    for (let i = 0; i < indirectElements.length; i += 1) {
      if (indirectElements[i].innerHTML.length > 0) indirect++;
    }
    Ferdi.setBadge(Math.max(direct, 0), Math.max(indirect, 0));
  };

  Ferdi.loop(getMessages);
};
