module.exports = (Ferdi) => {
  const getMessages = function getMessages() {
    let count = 0;

    // get amount of running timesheets
    const label = document.querySelector('.main-header .navbar .dropdown.messages-menu .ticktac span.label');
    if (label !== undefined) {
      count = label.textContent;
    }

    // set Ferdi badge
    Ferdi.setBadge(count);
  };

  document.addEventListener('click', (e) => {
    const { tagName, target, href } = e.target;

    if (tagName === 'A' && target === '_blank') {
      e.preventDefault();
      e.stopImmediatePropagation();
      window.open(href);
    }
  });

  Ferdi.loop(getMessages);
};
