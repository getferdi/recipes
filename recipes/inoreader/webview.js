module.exports = (Franz) => {
  const getMessages = () => {
    const all_articles = document.querySelector('#unread_cnt_all_items')
    if (!all_articles) return;

    const unread_articles_cnt = Number(all_articles.textContent.split('+')[0])
    if (!Number.isNaN(unread_articles_cnt)) {
      Franz.setBadge(unread_articles_cnt);
    }
  };

  Franz.loop(getMessages);
}
