module.exports = Ferdi => {
  const getMessages = function getMessages() {
    let homework = 0;
    const upcomingAssignment = document.getElementsByClassName('hrUpcomingAssignmentGroup');
    if (upcomingAssignment.length != 0) {
      let i;
      for (i = 0; i < upcomingAssignment.length; i++) {
        homework += upcomingAssignment[i].childElementCount;
      }
    }
    Ferdi.setBadge(parseInt(homework, 10));
  };

  Ferdi.loop(getMessages);
};
