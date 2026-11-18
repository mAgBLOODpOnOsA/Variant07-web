const form = document.querySelector("form");
const result = document.querySelector("#result");

const unitValue = 180; 
const extraValue = 50;  

function getResult(quantityText, price, delivery) {
  const quantity = Number(quantityText);
  if (isNaN(quantity) || quantity < 1) {
    return "Укажите корректное количество (целое число больше 0)";
  }
  const total = (price * quantity) + delivery;
  return "Итого: " + total + " руб.";
}

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const quantityText = document.querySelector("#quantity").value;
  const select = document.querySelector("#item");
  const itemName = select.options[select.selectedIndex].text;

  const message = getResult(quantityText, unitValue, extraValue);
  result.textContent = itemName + ". " + message;
});