import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<h2>${name}</h2>`;
  }

  el.innerHTML = products;
  // document.querySelector("#products_id").innerHTML = products;

  // console.log(products)
};

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFINITELY has an element with an id of 'dev-products
// We want to immediately render our app into that element


if(process.env.NODE_ENV === 'development'){
  const el = document.querySelector('#products_id')

  // Assuming our container doesn't have an element
  // with id 'dev-products'....
  if(el){
    mount(el)
  }
}

// Context/Situation #2
// We are running this file in development or production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-products' exists
// WE DO NOT WANT try to immediately render the app
export { mount };
