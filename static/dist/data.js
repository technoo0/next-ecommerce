"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const rawdata = fs_1.default.readFileSync(path_1.default.resolve("Proudacts.json")).toString();
const ProductsArray = JSON.parse(rawdata);
const getAllProducts = () => {
    return ProductsArray;
};
console.log(getAllProducts());
// export { getAllProducts };
