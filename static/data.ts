import fs from "fs";
import path from "path";
const getAllProducts = async () => {
  let rawdata = fs
    .readFileSync(path.join("static", "Proudacts.json"))
    .toString();
  let student = JSON.parse(rawdata);
  console.log(path.join("static", "Proudacts.json"));
};

export { getAllProducts };
