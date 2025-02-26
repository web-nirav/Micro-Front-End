import faker from "faker";

let products = "";

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products += `<h2>${name}</h2>`;
}
document.querySelector("#products_id").innerHTML = products;
// console.log(products)
