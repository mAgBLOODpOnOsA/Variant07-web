
const itemName = "Какао";
const unitPrice = 180; 
let quantityText = "2";
const deliveryPrice = 50; 
const isTraining = true; 

const quantity = Number(quantityText);

const totalPrice = unitPrice * quantity + deliveryPrice;

console.log("--- Начало расчета ---");
console.log("Название:", itemName);
console.log("Учебные данные:", isTraining);
console.log("Количество (число):", quantity);
console.log("Итого:", totalPrice);