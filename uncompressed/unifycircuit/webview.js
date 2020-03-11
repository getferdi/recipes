// orat.io integration
module.exports = (Circuit) => {
    function getMessages() {
      let direct = 0;
      let indirect = 0;
      const CircuitData = document.querySelector('#FranzMessages').dataset;
      if (CircuitData) {
        direct = CircuitData.direct;
        indirect = CircuitData.indirect;
      }
  
      Circuit.setBadge(direct, indirect);
    }
  
    Circuit.loop(getMessages);
  }