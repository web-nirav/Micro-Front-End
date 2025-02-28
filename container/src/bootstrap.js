import { mount as ProductsMount } from "products/ProductsIndex";
import { mount as CartMount } from "cartApp/CartShow";

console.log("Container App!");

//  as of this project's demo we are calling this directly but as per requirement we can import and call it any where from application or any specific route load
ProductsMount(document.querySelector("#container_products_id"));
CartMount(document.querySelector("#container_cart_id"));
