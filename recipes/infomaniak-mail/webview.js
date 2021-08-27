module.exports = Ferdi => {
  function getMessages() {
    const count = document.querySelector('.ws-tree-node-badge').innerText;
    Ferdi.setBadge(count ? Number(count.substring(1, count.length - 1)) : 0);
  }

  Ferdi.loop(getMessages);
};
