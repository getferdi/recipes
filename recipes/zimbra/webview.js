module.exports = Ferdi => {
  const getMessages = function getMessages() {
    const { title } = document;
    const regex = /\d+/;
    Ferdi.setBadge(regex.test(title) ? Number(regex.exec(title)[0]) : 0);
  };

  Ferdi.loop(getMessages);
};
