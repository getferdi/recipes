module.exports = (Ferdi) => {
  const getMessages = function getMessages() {
    const allMessages = Math.round(document.querySelectorAll('#global_filters .top_left_all_messages .count .value')[0].innerText);
    Ferdi.setBadge(allMessages);
  };

  Ferdi.loop(getMessages);
};
