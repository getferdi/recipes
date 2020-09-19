module.exports = (Franz) => {
  const getMessages = function getMessages() {
    const count = document.querySelectorAll('.new-item').length;

    Franz.setBadge(count);
	
  };
  Franz.loop(getMessages);
};
