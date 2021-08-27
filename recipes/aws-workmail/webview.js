module.exports = (Ferdi) => {
  const reload = (EventType) => new Promise((resolve, reject) => {
    const btn = document.getElementsByClassName('giraffe-hierarchy-node-refresh')[0];
    const EventObject = document.createEvent('Events');
    EventObject.initEvent(EventType, true, false);

    if (btn.dispatchEvent(EventObject)) {
      resolve();
    } else {
      reject();
    }
  });

  const getUnread = () => {
    const nodes = document.getElementsByClassName('giraffe-hierarchy-node-counter');
    let counter = 0;

    for	(let i = 0; i < nodes.length; i++) {
      const node = parseInt(nodes[i].innerText);
      counter += (node > 0) ? node : 0;
    }

    Ferdi.setBadge(counter);
  };

  if (!window.location.pathname.includes('auth')) {
    Ferdi.loop(getUnread);

    window.setInterval(() => {
      reload('click');
    }, 60000);
  }
};
