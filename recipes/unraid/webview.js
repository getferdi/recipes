module.exports = (Franz) => {

  const getMessages = () => {
    const messages = $('#jGrowl .jGrowl-notify').length;

    Franz.setBadge(messages - 1);
  }

  Franz.loop(getMessages);

};