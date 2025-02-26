import faker from 'faker'

const cartText = `<h3>You have ${faker.random.number()} items in your cart.</h3>`

document.querySelector('#cart_id').innerHTML = cartText