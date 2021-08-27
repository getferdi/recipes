module.exports = (Ferdi) => {
  function getMessages() {
    let groupCount = 0;
    let individualCount = 0;
    let directCount = 0;
    let indirectCount = 0;
    const roomInfoContainer = document.querySelectorAll('li.sc-dnqmqq');
    Array.prototype.forEach.call(roomInfoContainer, (room) => {
      let count = 0;
      const unreadBadge = room.querySelector('span.sc-kAzzGY');
      const unreadBadgeHasMention = room.querySelector('li._unreadBadge.sc-cSHVUG');

      if (unreadBadge && unreadBadge.innerText) {
        count = parseInt(unreadBadge.innerText);
      }

      if (count > 0) {
        if (room.querySelector('img.sc-gqjmRU').getAttribute('src').indexOf('avatar') < 0) {
          groupCount += count;

          if (unreadBadgeHasMention) {
            directCount++;
          } else {
            indirectCount++;
          }
        } else {
          individualCount += count;
          directCount++;
        }
      }
    });
    Ferdi.setBadge(directCount, indirectCount);
  }

  Ferdi.loop(getMessages);
};
