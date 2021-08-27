module.exports = Ferdi => {
  const getMessages = function getMessages() {
    let directs = 0;

    if (document.getElementsByClassName('nwa-msg-counter icq-recent_state-read').length > 0) {
      const elements = document.getElementsByClassName('nwa-msg-counter icq-recent_state-read');
      for (let i = 0; i < elements.length; i++) {
        const countLine = parseInt(elements[i].innerText.replace(/[^0-9.]/g, ''), 10);
        if (!isNaN(directs) && countLine > 0) {
          // directs += count_line; // count every message
          directs += 1; // count 1 per channel with messages
        }
      }
    }

    Ferdi.setBadge(directs);
  };

  Ferdi.loop(getMessages);
};
