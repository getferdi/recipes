module.exports = (Ferdi) => {
  const getMessages = () => {
    const unreadMailInCurrentFolder = $('.zmList.zmLUrd').length;
    const unreadMailAnyware = $('#zmlTree .zmTreeNDWra .zmBold').length;

    Ferdi.setBadge(unreadMailInCurrentFolder, unreadMailAnyware);
  };

  Ferdi.loop(getMessages);
};
