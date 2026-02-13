import { header } from "./header.js";
import { footer } from "./footer.js";
import { products, showProducts } from "./product.js";

header();

showProducts();

console.log("\nTotal products:", products.length);

footer();
