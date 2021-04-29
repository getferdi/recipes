module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let count = 0;

    // get amount of running timesheets
    let label = document.querySelector('.main-header .navbar .dropdown.messages-menu .ticktac span.label');
    if (label !== undefined) {
        count = label.textContent;
    }

    // set Franz badge
    Franz.setBadge(count);
  };

  document.addEventListener('click', (e) => {
    const { tagName, target, href } = e.target;

    if (tagName === 'A' && target === '_blank') {
      e.preventDefault();
      e.stopImmediatePropagation();
      window.open(href);
    }
  });

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
