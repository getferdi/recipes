'use strict';

module.exports = Franz => {
  function getMessages() {
    const badges = document.querySelectorAll('.mx_RoomSublist:not(.mx_RoomSublist_hidden) .mx_RoomSublist_badgeContainer');

    // Number of messages from People
    let direct_count = 0;
    if (badges.length > 0 && badges[0].children.length > 0) {
      direct_count = parseInt(badges[0].textContent)
    }

    // Number of messages from Rooms
    let indirect_count = 0;
    if (badges.length > 1 && badges[1].children.length > 0) {
      indirect_count = parseInt(badges[1].textContent)
    }

    // set Franz badge
    Franz.setBadge(direct_count, indirect_count);
  }

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
