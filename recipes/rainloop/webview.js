module.exports = Ferdi => {
  const getMessages = () => {
    let updates = 0;
    let inbox = 0;
    let full = 0;

    $('.b-folders-user .ui-droppable').each((i, obj) => {
      const countText = $(obj).find('.count').first().html();
      if (typeof countText === 'string' && countText !== '') {
        if ($(obj).hasClass('system')) {
          if ($(obj).hasClass('i-am-inbox')) {
            inbox += parseInt(countText);
          }
        } else {
          updates += parseInt(countText);
        }
      }
    });

    full = inbox + updates;
    Ferdi.setBadge(full);
  };

  Ferdi.loop(getMessages);
};
