import { json } from "express";
import { readFile, writeFile, appendFile } from "../utils/filesystem.js";
import { URL } from "url";

const storagepath = new URL("../data/category.json", import.meta.url);
console.log(storagepath);
const categoryinfo = async (req, res) => {
  try {
    const categorydata = await readFile(storagepath);
    const categoryFinal = categorydata ? JSON.parse(categorydata) : [];
    res.json({
      status: "success",
      data: categoryFinal,
      length: categoryFinal.length,
    });
  } catch (e) {
    res.status(500).json({
      status: "error",
      message: "something went wrong",
    });
  }
};
export { categoryinfo };
