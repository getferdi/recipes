module.exports = (Franz) => {
  const getNotifications = function getNotifications() {

		var count = 0;

		var elements = [
			document.getElementById('requestsCountValue'),
			// document.getElementById('mercurymessagesCountValue'),
			document.getElementById('notificationsCountValue'),
			document.querySelector('.k4urcfbm.qnrpqo6b.qt6c0cv9.jxrgncrl.jb3vyjys.taijpn5t.datstx6m.pq6dq46d.ljqsnud1.bp9cbjyn'),
		]

		elements.forEach(function(element){
			if(element !== null && parseInt(element.innerHTML, 10)){
				count += parseInt(element.innerHTML, 10);
			}
		})

    Franz.setBadge(count);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getNotifications);
};
