function calculate_price() {
  console.log("aaaaaa");
  const priceInput = document.getElementById("item-price");
  priceInput.addEventListener("input" , ()=> {
    console.log("bbbbb");
      const inputValue = priceInput.value;
      const addTaxDom = document.getElementById("add-tax-price");
      addTaxDom.innerHTML = Math.floor(inputValue / 10);
      const addProfitDom = document.getElementById("profit");
      addProfitDom.innerHTML = Math.floor(inputValue) - Math.floor(inputValue / 10);
  })

};

window.addEventListener('turbo:load', calculate_price);

