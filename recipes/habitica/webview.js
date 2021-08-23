module.exports = (Franz) => {
  const getMessages = () => {
    let count = 0;
    const element = document.querySelector('.message-count');
    if (element) {
      count = Number(element.innerText);
    }
    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};
