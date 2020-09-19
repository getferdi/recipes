module.exports = (Franz) => {

  // class corresponding to the mute icon
  const muteSelector = '.DQy0Rb';

  // class corresponding to the red badge that is visible for direct messages
  const directMessageSelector = '.SaMfhe.m9MHid';

  // class corresponding to the bold text that is visible for all messages
  const allMessageSelector = '.IL9EXe.PL5Wwe.dHI9xe.H7du2';

  const isMuted = node => !!node.closest('[role="listitem"]').querySelector(muteSelector);

  const getMessages = function getMessages() {
    let allMessageCount = 0;
    let directCount = 0;

    // get unread direct messages
    document.querySelectorAll(directMessageSelector).forEach((node) => {
      // Hangouts Chat overrides the muted indicator when there is a direct mention
      // Check for the width of the badge element
      if (!isMuted(node) && node.clientWidth != 0 ) {
        directCount += 1;
      }
    });

    let indirectCount = 0;
    document.querySelectorAll(allMessageSelector).forEach((node) => {
      if (!isMuted(node)) {
        allMessageCount += 1;
      }
    });
    indirectCount = allMessageCount - directCount;

    // set Franz badge
    Franz.setBadge(directCount, indirectCount);
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
