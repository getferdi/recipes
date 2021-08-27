module.exports = Ferdi => {
  const getMessages = () => {
    const element = document.querySelector('[href="/notifications"] > div');
    const content = window.getComputedStyle(element, ':after').getPropertyValue('content').match(/\d+/);
    const notifications = Number(content);

    Ferdi.setBadge(notifications);
  };

  Ferdi.loop(getMessages);
};
