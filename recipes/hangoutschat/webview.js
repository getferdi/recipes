module.exports = (Franz) => {
  // class corresponding to the red badge that is visible for direct messages
  const directMessageSelector = "div.V6.CL.su.ahD.X9.Y2 span.akt span.XU";

  // class corresponding to the bold text that is visible for room messages
  const indirectMessageSelector = "div.V6.CL.V2.X9.Y2 span.akt span.XU";

  const getMessages = function getMessages() {
    // get unread direct messages
    let directCount = Number(document.querySelector(directMessageSelector).innerText)

    // get unread indirect messages
    let indirectCount = Number(document.querySelector(indirectMessageSelector).innerText);

    // set Franz badge
    Franz.setBadge(directCount, indirectCount);
  };

  document.addEventListener("click", (e) => {
    const { tagName, target, href } = e.target;

    if (tagName === "A" && target === "_blank") {
      e.preventDefault();
      e.stopImmediatePropagation();
      window.open(href);
    }
  });

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
