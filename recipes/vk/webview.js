module.exports = Ferdi => {
  const getMessages = function getMessages() {
    let directs = 0;
    if (document.getElementsByClassName('left_count').length > 0) {
      directs = parseInt(document.getElementsByClassName('left_count')[0].innerText, 10);
    }

    Ferdi.setBadge(directs);
  };

  Ferdi.loop(getMessages);
};
