'use strict';

const path = require('path');

module.exports = Franz => {
    const getMessages = function getMessages() {
        const elements = document.querySelectorAll('.badge.unread-count:not(.ng-hide)');
        let count = 0;

        for (let i = 0; i < elements.length; i += 1) {
            try {
                count += parseInt(elements[i].innerHTML.trim(), 10);
            } catch (e) {
                console.error(e);
            }
        }

        // set Franz badge
        Franz.setBadge(count);
    };

    // inject franz.css stylesheet
    Franz.injectCSS(path.join(__dirname, 'service.css'));

    // check for new messages every second and update Franz badge
    Franz.loop(getMessages);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRocmVlbWEvd2Vidmlldy5qcyJdLCJuYW1lcyI6WyJwYXRoIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJGcmFueiIsImdldE1lc3NhZ2VzIiwiZWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb3VudCIsImkiLCJsZW5ndGgiLCJwYXJzZUludCIsImlubmVySFRNTCIsInRyaW0iLCJlIiwiY29uc29sZSIsImVycm9yIiwic2V0QmFkZ2UiLCJpbmplY3RDU1MiLCJqb2luIiwiX19kaXJuYW1lIiwibG9vcCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsTUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUJDLFNBQVM7QUFDdEIsVUFBTUMsY0FBYyxTQUFTQSxXQUFULEdBQXVCO0FBQ3ZDLGNBQU1DLFdBQVdDLFNBQVNDLGdCQUFULENBQTBCLG1DQUExQixDQUFqQjtBQUNBLFlBQUlDLFFBQVEsQ0FBWjs7QUFFQSxhQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUosU0FBU0ssTUFBN0IsRUFBcUNELEtBQUssQ0FBMUMsRUFBNkM7QUFDekMsZ0JBQUk7QUFDQUQseUJBQVNHLFNBQVNOLFNBQVNJLENBQVQsRUFBWUcsU0FBWixDQUFzQkMsSUFBdEIsRUFBVCxFQUF1QyxFQUF2QyxDQUFUO0FBQ0gsYUFGRCxDQUVFLE9BQU9DLENBQVAsRUFBVTtBQUNSQyx3QkFBUUMsS0FBUixDQUFjRixDQUFkO0FBQ0g7QUFDSjs7QUFFRDtBQUNBWCxjQUFNYyxRQUFOLENBQWVULEtBQWY7QUFDSCxLQWREOztBQWdCQTtBQUNBTCxVQUFNZSxTQUFOLENBQWdCbkIsS0FBS29CLElBQUwsQ0FBVUMsU0FBVixFQUFxQixhQUFyQixDQUFoQjs7QUFFQTtBQUNBakIsVUFBTWtCLElBQU4sQ0FBV2pCLFdBQVg7QUFDSCxDQXRCRCIsImZpbGUiOiJ0aHJlZW1hL3dlYnZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRnJhbnogPT4ge1xuICAgIGNvbnN0IGdldE1lc3NhZ2VzID0gZnVuY3Rpb24gZ2V0TWVzc2FnZXMoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJhZGdlLnVucmVhZC1jb3VudDpub3QoLm5nLWhpZGUpJyk7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb3VudCArPSBwYXJzZUludChlbGVtZW50c1tpXS5pbm5lckhUTUwudHJpbSgpLCAxMCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCBGcmFueiBiYWRnZVxuICAgICAgICBGcmFuei5zZXRCYWRnZShjb3VudCk7XG4gICAgfTtcblxuICAgIC8vIGluamVjdCBmcmFuei5jc3Mgc3R5bGVzaGVldFxuICAgIEZyYW56LmluamVjdENTUyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnc2VydmljZS5jc3MnKSk7XG5cbiAgICAvLyBjaGVjayBmb3IgbmV3IG1lc3NhZ2VzIGV2ZXJ5IHNlY29uZCBhbmQgdXBkYXRlIEZyYW56IGJhZGdlXG4gICAgRnJhbnoubG9vcChnZXRNZXNzYWdlcyk7XG59O1xuIl19