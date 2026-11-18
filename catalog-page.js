const catalog = [
  { 
    name: "Какао", 
    specs: "250 мл · 180 рублей", 
    description: "Тёплый напиток с молочной пеной", 
    img: "images/item1.png" 
  },
  { 
    name: "Ягодный чай", 
    specs: "300 мл · 150 рублей", 
    description: "Чай с ягодами и лёгким ароматом", 
    img: "images/item2.png" 
  },
  { 
    name: "Лимонный кекс", 
    specs: "120 г · 140 рублей", 
    description: "Мягкий десерт к любимому напитку", 
    img: "images/item3.png" 
  }
];

function filterByText(items, query) {
  const normalized = query.trim().toLowerCase();
  if (normalized === "") return items;
  return items.filter(item => item.name.toLowerCase().includes(normalized));
}

const catalogList = document.querySelector("#catalog-list");
const statusText = document.querySelector("#status");
const searchInput = document.querySelector("#search");

function renderCatalog(items) {
  catalogList.replaceChildren();
  
  for (const item of items) {
    const card = document.createElement("article");
    card.className = "card";

    const title = document.createElement("h2");
    title.textContent = item.name;

    const image = document.createElement("img");
    image.src = item.img;
    image.alt = item.name;

    const specs = document.createElement("p");
    specs.textContent = item.specs;
    specs.className = "specs";

    const description = document.createElement("p");
    description.textContent = item.description;
    description.className = "description";

    card.append(title, image, specs, description);
    catalogList.append(card);
  }

  if (items.length === 0) {
    statusText.textContent = "Ничего не найдено";
  } else {
    statusText.textContent = "Показано: " + items.length + " из " + catalog.length;
  }
}

renderCatalog(catalog);

searchInput.addEventListener("input", function () {
  const found = filterByText(catalog, searchInput.value);
  renderCatalog(found);
});