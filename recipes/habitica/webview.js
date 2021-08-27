module.exports = (Ferdi) => {
  const getMessages = () => {
    let count = 0;
    const element = document.querySelector('.message-count');
    if (element) {
      count = Number(element.innerText);
    }
    Ferdi.setBadge(count);
  };

  Ferdi.loop(getMessages);
};
