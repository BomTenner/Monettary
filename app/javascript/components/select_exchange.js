const initClickSelect = () => {
  const button1 = document.querySelector('.select-1');
  const button2 = document.querySelector('.select-2');
  const button3 = document.querySelector('.select-3');
  // Change image
  const image = document.getElementById('currency-logo');

  if (button1) {
    button1.addEventListener("click", (event) => {
      image.src = event.target.dataset.image;
      button1.classList.toggle('color-change');
      button2.classList.remove('color-change');
      button3.classList.remove('color-change');
     });
  }
  if (button2) {
    button2.addEventListener("click", (event) => {
      image.src = event.target.dataset.image;
      button1.classList.remove('color-change');
      button2.classList.toggle('color-change');
      button3.classList.remove('color-change');
     });
  }
  if (button3) {
    button3.addEventListener("click", (event) => {
      image.src = event.target.dataset.image;
      button1.classList.remove('color-change');
      button2.classList.remove('color-change');
      button3.classList.toggle('color-change');
     });
  }
};

const initExecuteExchange = () => {
  const divExchangeButton = document.querySelector('.disable-button');
  const buttonExchange = document.querySelector('.execute-button');
  const button1 = document.querySelector('.select-1');
  const button2 = document.querySelector('.select-2');
  const button3 = document.querySelector('.select-3');
  window.addEventListener("click", (event) => {
    if (buttonExchange) {
      if (button1.classList.contains('color-change') || button2.classList.contains('color-change') || button3.classList.contains('color-change')) {
        divExchangeButton.classList.remove('disable-button');
        buttonExchange.classList.remove('pointer-none');
      } else {
        divExchangeButton.classList.add('disable-button');
        buttonExchange.classList.add('pointer-none');
       }
    }
  });
};

const confirmation = () => {
  const processingPage = document.querySelector('.container-exchange-processing');
  const lastPage = document.querySelector('.container-exchange-confirmation');
  processingPage.classList.add('d-none');
  lastPage.classList.remove('d-none');
};

const initMoveNext = () => {
  const button = document.querySelector('.execute-button');
  const nextPage = document.querySelector('.container-exchange-processing');
  const thisPage = document.querySelector('.container-select-exchange');
  const button1 = document.querySelector('.select-1');
  const button2 = document.querySelector('.select-2');
  const button3 = document.querySelector('.select-3');
  const sendAsset = document.querySelector('.sending-asset');
  const receiveAsset = document.querySelector('.receiving-asset');
  const assetHash = document.querySelector('.asset-hash');
  if (button) {
    button.addEventListener("click", (event) => {
      thisPage.classList.add('d-none');
      nextPage.classList.remove('d-none');
      window.setTimeout(() => { confirmation(); }, 7000);
      const onExchange = document.querySelector('.exchange-on-execution');
      const exchangeRateSummary = document.querySelector('.exchange-rate-summary');
      const assets = JSON.parse(assetHash.innerHTML);
      const feeSummary = document.querySelector('.fee-summary');
      if (button1.classList.contains('color-change')) {
        const exchange = document.querySelector('.uniswap');
        const exchangeRate = document.querySelector('.exchange-rate-show1');
        const fee = document.querySelector('.random-fee1');
        feeSummary.innerHTML += fee.innerHTML;
        onExchange.innerHTML += exchange.innerHTML;
        exchangeRateSummary.innerHTML += `${exchangeRate.innerHTML} ${assets[receiveAsset.value].ticker}/${assets[sendAsset.value].ticker}`;
      }
      if (button2.classList.contains('color-change')) {
        const exchange = document.querySelector('.inch');
        const exchangeRate = document.querySelector('.exchange-rate-show2');
        const fee = document.querySelector('.random-fee2');
        feeSummary.innerHTML += fee.innerHTML;
        onExchange.innerHTML += exchange.innerHTML;
        exchangeRateSummary.innerHTML += `${exchangeRate.innerHTML} ${assets[receiveAsset.value].ticker}/${assets[sendAsset.value].ticker}`;
      }
      if (button3.classList.contains('color-change')) {
        const exchange = document.querySelector('.kyber');
        const exchangeRate = document.querySelector('.exchange-rate-show3');
        const fee = document.querySelector('.random-fee3');
        feeSummary.innerHTML += fee.innerHTML;
        onExchange.innerHTML += exchange.innerHTML;
        exchangeRateSummary.innerHTML += `${exchangeRate.innerHTML} ${assets[receiveAsset.value].ticker}/${assets[sendAsset.value].ticker}`;
      }
    });
  }
};

export { initClickSelect, initExecuteExchange, initMoveNext }
