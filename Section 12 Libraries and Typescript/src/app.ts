import _ from "lodash";
import { Product } from "./product.model";
import "reflect-metadata";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

console.log(_.shuffle([1, 2, 3]));

const products = [
  {
    title: "Book",
    price: 10,
  },
  {
    title: "Shirt",
    price: 20,
  },
];

const loadedProducts = plainToInstance(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

const p1 = new Product("Book", 12.99);
const newProduct = new Product("", -5.99);
validate(newProduct).then((errors) => {
  if (errors.length > 0) {
    console.log("VALIDATION ERRORS!");
    console.log(errors);
  } else {
    console.log(newProduct.getInformation());
  }
});
console.log(p1.getInformation());
