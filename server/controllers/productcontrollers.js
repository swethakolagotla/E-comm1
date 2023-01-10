import { json } from "express"
import { readFile ,writeFile,appendFile} from "../utils/filesystem.js"
import { URL } from "url";

const storagepath = new URL("../data/products.json", import.meta.url);
console.log(storagepath)
const productinfo=async (req,res)=>{
try{
    const productdata= await readFile(storagepath)
    const productFinal=productdata?JSON.parse(productdata):[]
    res.json({
        status:"success",
        data:productFinal,
        length:productFinal.length
    })
}
catch(e){

    res.status(500).json({
        status:"error",
        message:"something went wrong"
    })
}
}
export {productinfo}