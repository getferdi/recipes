module.exports = Ferdi => {
  const getMessages = function getMessages() {
    const indirectElements = document.querySelectorAll('.badge:not(.highlight)');
    const direct = document.querySelectorAll('.badge.highlight').length;
    let indirect = 0;
    for (let i = 0; i < indirectElements.length; i += 1) {
      if (indirectElements[i].innerHTML.length > 0) indirect++;
    }
    console.log(direct, indirect);
    Ferdi.setBadge(direct, indirect);
  };

  Ferdi.loop(getMessages);
};
