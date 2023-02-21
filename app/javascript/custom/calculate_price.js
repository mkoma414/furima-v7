function calculate_price() {
  const priceInput = document.getElementById("item-price");
  priceInput.addEventListener("input" , ()=> {
      const inputValue = priceInput.value;
      const addTaxDom = document.getElementById("add-tax-price");
      addTaxDom.innerHTML = Math.floor(inputValue / 10);
      const addProfitDom = document.getElementById("profit");
      addProfitDom.innerHTML = Math.floor(inputValue) - Math.floor(inputValue / 10);
  })

};

window.addEventListener('turbo:render', calculate_price);
console.log("init");
