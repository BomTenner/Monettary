const test = () => {
  const container = document.querySelector('.container-select-exchange');
  const scanning = document.querySelector('.container-scanning-exchanges');
  scanning.classList.add("d-none");
  container.classList.remove("d-none");
};

const initScanExchanges = () => {
  const container = document.querySelector('.container-exchange');
  const button = document.querySelector('.continue-button');
  const scanning = document.querySelector('.container-scanning-exchanges');
  button.addEventListener("click", (event) => {
    event.preventDefault();
    container.classList.add("d-none");
    scanning.classList.remove("d-none");
    scanning.classList.add("joker");
    window.setTimeout(() => { test(); }, 7000);
  });
};

var radius = 100; // adjust to move items in and out

const initMoveIt = () => {
  var fields = $('.item'),
    container = $('#container'),
    width = container.width(),
    height = container.height();
  var angle = 0,
    step = (2 * Math.PI) / fields.length;
  fields.each(function() {
    var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
    var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);
    if (window.console) {
      console.log($(this).text(), x, y);
    }
    $(this).css({
      left: x + 'px',
      top: y + 'px'
    });
    angle += step;
  });
};

const initTimer = () => {
  const container = document.querySelector('.joker');
  if (container) {
    console.log(container);
  }
};



export { initScanExchanges, initMoveIt, initTimer }