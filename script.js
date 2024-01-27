let products = [
{
    name: "Tužka",
    price: 10,
    quantity: 100,
  },
  {
    name: "Sešit",
    price: 20,
    quantity: 150,
  },
  {
    name: "Batoh",
    price: 500,
    quantity: 50,
  },
  {
    name: "Pravítko",
    price: 30,
    quantity: 75,
  },
  {
    name: "Pero",
    price: 40,
    quantity: 200,
  },
  {
    name: "Kalkulačka",
    price: 200,
    quantity: 30,
  },
  {
    name: "Barvy",
    price: 150,
    quantity: 80,
  },
  {
    name: "Štětce",
    price: 60,
    quantity: 120,
  },
  {
    name: "Ležidlo",
    price: 300,
    quantity: 40,
  },
  {
    name: "Mapa světa",
    price: 180,
    quantity: 60,
  },
];

  function init() {
    showProducts();
  }
  
  function showProducts() {
    const productsTable = document.getElementById("products-table");
    productsTable.innerHTML = "";
  
    for (const product of products) {
      const row = document.createElement("tr");
      const productNameCell = document.createElement("td");
      productNameCell.innerText = product.name;
      row.appendChild(productNameCell);
  
      const quantityCell = document.createElement("td");
      quantityCell.innerText = product.quantity;
      row.appendChild(quantityCell);
  
      const priceCell = document.createElement("td");
      priceCell.innerText = product.price;
      row.appendChild(priceCell);
  
      productsTable.appendChild(row);
    }
  }
  
  function findMostExpensiveProduct() {
    let mostExpensiveProduct = products[0];
  
    for (const product of products) {
      if (product.price > mostExpensiveProduct.price) {
        mostExpensiveProduct = product;
      }
    }
    alert(`Nejdražší produkt je ${mostExpensiveProduct.name} s cenou ${mostExpensiveProduct.price}.`);
  }
  
  function filterByQuantity() {
    const quantity = prompt("Zadejte množství:");
  
    const filteredProducts = products.filter(product => product.quantity === quantity);
  
    showProducts(filteredProducts);
  }
  function calculateTotalValue() {
    const totalValue = 0;
    }
    for (const product of products) {
}