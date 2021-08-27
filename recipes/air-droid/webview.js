module.exports = (Ferdi) => {
  function getMessages() {
    const count = {};
    const data = document.querySelector('#FranzMessages').dataset;
    if (data) {
      count.count = data.direct;
      count.count_indirect = data.indirect;
    }

    Ferdi.setBadge(count);
  }

  Ferdi.loop(getMessages);
};
