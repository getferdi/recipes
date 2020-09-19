module.exports = Franz => {
    function getMessages() {
        const count = document.querySelector('.navigationItem-counter').innerText
        Franz.setBadge(count ? Number(count.substring(1, count.length - 1)) : 0)
    }
    Franz.loop(getMessages)
}
