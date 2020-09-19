'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Franz => {
  const getMessages = function getMessages() {
    // get all message badges
    const allBadges = document.querySelectorAll('.activity-indicator');
    let directCount = 0,
        indirectCount = 0;

    // get unread direct messages by tring to read the badge values
    allBadges.forEach(item => {
      if (item.hasAttribute('data-count')) {
        // Count for DMs should be in the data-count attribute
        directCount += Math.max(1, +item.getAttribute('data-count'));
      } else {
        // this will be the case for indirect messages
        indirectCount++;
      }
    });

    // set Franz badge
    Franz.setBadge(directCount, indirectCount);
  };
  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);

  // inject franz.css stylesheet
  Franz.injectCSS(_path2.default.join(__dirname, 'service.css'));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmlkZS93ZWJ2aWV3LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJGcmFueiIsImdldE1lc3NhZ2VzIiwiYWxsQmFkZ2VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGlyZWN0Q291bnQiLCJpbmRpcmVjdENvdW50IiwiZm9yRWFjaCIsIml0ZW0iLCJoYXNBdHRyaWJ1dGUiLCJNYXRoIiwibWF4IiwiZ2V0QXR0cmlidXRlIiwic2V0QmFkZ2UiLCJsb29wIiwiaW5qZWN0Q1NTIiwiam9pbiIsIl9fZGlybmFtZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBQ0FBLE9BQU9DLE9BQVAsR0FBa0JDLEtBQUQsSUFBVztBQUMxQixRQUFNQyxjQUFjLFNBQVNBLFdBQVQsR0FBdUI7QUFDM0M7QUFDRSxVQUFNQyxZQUFZQyxTQUFTQyxnQkFBVCxDQUEwQixxQkFBMUIsQ0FBbEI7QUFDQSxRQUFJQyxjQUFjLENBQWxCO0FBQUEsUUFDRUMsZ0JBQWdCLENBRGxCOztBQUdGO0FBQ0VKLGNBQVVLLE9BQVYsQ0FBbUJDLElBQUQsSUFBVTtBQUMxQixVQUFJQSxLQUFLQyxZQUFMLENBQWtCLFlBQWxCLENBQUosRUFBcUM7QUFDdkM7QUFDSUosdUJBQWVLLEtBQUtDLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBRUgsS0FBS0ksWUFBTCxDQUFrQixZQUFsQixDQUFkLENBQWY7QUFDRCxPQUhELE1BR087QUFDVDtBQUNJTjtBQUNEO0FBQ0YsS0FSRDs7QUFVRjtBQUNFTixVQUFNYSxRQUFOLENBQWVSLFdBQWYsRUFBNEJDLGFBQTVCO0FBQ0QsR0FuQkQ7QUFvQkQ7QUFDQ04sUUFBTWMsSUFBTixDQUFXYixXQUFYOztBQUVEO0FBQ0NELFFBQU1lLFNBQU4sQ0FBZ0IsZUFBS0MsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLGFBQXJCLENBQWhCO0FBQ0QsQ0ExQkQiLCJmaWxlIjoic3RyaWRlL3dlYnZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbm1vZHVsZS5leHBvcnRzID0gKEZyYW56KSA9PiB7XG4gIGNvbnN0IGdldE1lc3NhZ2VzID0gZnVuY3Rpb24gZ2V0TWVzc2FnZXMoKSB7XG5cdFx0Ly8gZ2V0IGFsbCBtZXNzYWdlIGJhZGdlc1xuICAgIGNvbnN0IGFsbEJhZGdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3Rpdml0eS1pbmRpY2F0b3InKTtcbiAgICBsZXQgZGlyZWN0Q291bnQgPSAwLFxuICAgICAgaW5kaXJlY3RDb3VudCA9IDA7XG5cblx0XHQvLyBnZXQgdW5yZWFkIGRpcmVjdCBtZXNzYWdlcyBieSB0cmluZyB0byByZWFkIHRoZSBiYWRnZSB2YWx1ZXNcbiAgICBhbGxCYWRnZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0uaGFzQXR0cmlidXRlKCdkYXRhLWNvdW50JykpIHtcblx0XHRcdFx0Ly8gQ291bnQgZm9yIERNcyBzaG91bGQgYmUgaW4gdGhlIGRhdGEtY291bnQgYXR0cmlidXRlXG4gICAgICAgIGRpcmVjdENvdW50ICs9IE1hdGgubWF4KDEsICsoaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY291bnQnKSkpO1xuICAgICAgfSBlbHNlIHtcblx0XHRcdFx0Ly8gdGhpcyB3aWxsIGJlIHRoZSBjYXNlIGZvciBpbmRpcmVjdCBtZXNzYWdlc1xuICAgICAgICBpbmRpcmVjdENvdW50Kys7XG4gICAgICB9XG4gICAgfSk7XG5cblx0XHQvLyBzZXQgRnJhbnogYmFkZ2VcbiAgICBGcmFuei5zZXRCYWRnZShkaXJlY3RDb3VudCwgaW5kaXJlY3RDb3VudCk7XG4gIH07XG5cdC8vIGNoZWNrIGZvciBuZXcgbWVzc2FnZXMgZXZlcnkgc2Vjb25kIGFuZCB1cGRhdGUgRnJhbnogYmFkZ2VcbiAgRnJhbnoubG9vcChnZXRNZXNzYWdlcyk7XG5cblx0Ly8gaW5qZWN0IGZyYW56LmNzcyBzdHlsZXNoZWV0XG4gIEZyYW56LmluamVjdENTUyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnc2VydmljZS5jc3MnKSk7XG59O1xuIl19