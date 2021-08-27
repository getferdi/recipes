module.exports = (Ferdi) => {
  const getNotifications = function getNotifications() {
    let count = 0;

    const elements = [
      document.getElementById('requestsCountValue'),
      // document.getElementById('mercurymessagesCountValue'),
      document.getElementById('notificationsCountValue'),
      document.querySelector('.k4urcfbm.qnrpqo6b.qt6c0cv9.jxrgncrl.jb3vyjys.taijpn5t.datstx6m.pq6dq46d.ljqsnud1.bp9cbjyn'),
    ];

    elements.forEach((element) => {
      if (element !== null && parseInt(element.innerHTML, 10)) {
        count += parseInt(element.innerHTML, 10);
      }
    });

    Ferdi.setBadge(count);
  };

  Ferdi.loop(getNotifications);
};
