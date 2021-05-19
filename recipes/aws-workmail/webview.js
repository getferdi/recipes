module.exports = (Franz, options) => {
  const reload = (EventType) => {
    return new Promise((resolve, reject) => {
      const btn = document.getElementsByClassName('giraffe-hierarchy-node-refresh')[0];
      const EventObject = document.createEvent('Events');
      EventObject.initEvent(EventType, true, false);

      if (btn.dispatchEvent(EventObject)) {
        resolve();
      } else {
        reject();
      }
    });
  };

  const getUnread = () => {
    const nodes = document.getElementsByClassName('giraffe-hierarchy-node-counter');
    let counter = 0;

    for	(var i = 0; i < nodes.length; i++) {
      let node = parseInt(nodes[i].innerText);
      counter += (node > 0) ? node : 0;
    }

    Franz.setBadge(counter);
  };

  if (!window.location.pathname.includes('auth')) {
    Franz.loop(getUnread);

    window.setInterval(function() {
      reload('click');
    }, 60000);
  }
};
