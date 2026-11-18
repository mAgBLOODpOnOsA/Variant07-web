const menu = [
  { name: "Какао", price: 180, volume: "250 мл", description: "Тёплый напиток с молочной пеной" },
  { name: "Ягодный чай", price: 150, volume: "300 мл", description: "Чай с ягодами и лёгким ароматом" },
  { name: "Лимонный кекс", price: 140, volume: "120 г", description: "Мягкий десерт к любимому напитку" }
];

function calculateOrder(price, quantity, delivery) {
  if (quantity < 1) return "Ошибка: количество должно быть больше 0";
  return (price * quantity) + delivery;
}

console.log("--- ПРОВЕРКА ФУНКЦИИ ---");
console.log("Итоговая стоимость заказа:", calculateOrder(menu[0].price, 3, 50));
console.log("Названия:", menu.map(item => item.name));

const status = document.querySelector("#status");
status.textContent = "Записей в каталоге: " + menu.length;

const namesList = document.querySelector("#names");
const showButton = document.querySelector("#show-names");
const searchInput = document.querySelector("#search-word");

function filterByText(items, query) {
  const normalized = query.trim().toLowerCase();
  if (normalized === "") return items;
  return items.filter(item => item.name.toLowerCase().includes(normalized));
}

function renderNames() {
  const query = searchInput.value;
  const filteredItems = filterByText(menu, query);

  namesList.replaceChildren();
  for (const item of filteredItems) {
    const line = document.createElement("li");
    line.textContent = item.name;
    namesList.append(line);
  }

  console.log("Найдено записей:", filteredItems.length);
  console.table(filteredItems);
}

showButton.addEventListener("click", renderNames);