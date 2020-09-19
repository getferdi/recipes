module.exports = (Franz) => {
  function getMessages() {
    Franz.setBadge(document.querySelector("#unread_count").innerHTML.replace(/\s/g,''));
  }

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
