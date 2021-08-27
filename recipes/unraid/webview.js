module.exports = (Ferdi) => {
  const getMessages = () => {
    const messages = $('#jGrowl .jGrowl-notify').length;

    Ferdi.setBadge(messages - 1);
  };

  Ferdi.loop(getMessages);
};
