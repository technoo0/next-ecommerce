import fs from "fs";
import path from "path";

const rawdata = fs.readFileSync(path.resolve("Proudacts.json")).toString();
const ProductsArray = JSON.parse(rawdata);

const getAllProducts = () => {
  return ProductsArray;
};

console.log(getAllProducts());

// export { getAllProducts };
