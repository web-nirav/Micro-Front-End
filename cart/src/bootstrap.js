import faker from "faker";

const mount = (el) => {
  const cartText = `<h3>You have ${faker.random.number()} items in your cart.</h3>`;

  el.innerHTML = cartText;
//   document.querySelector("#cart_id").innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#cart_id");

  if (el) {
    mount(el);
  }
}

export { mount };
