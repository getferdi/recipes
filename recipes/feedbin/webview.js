module.exports = (Ferdi) => {
  function getMessages() {
    const count = feedbin.count_data.unread_entries.length || 0;
    Ferdi.setBadge(count);
  }

  Ferdi.loop(getMessages);
};
