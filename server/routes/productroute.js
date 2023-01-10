import express from "express"
import { productinfo } from "../controllers/productcontrollers.js"
const router=express.Router()
router.route("/api/v1/productinfo").get(productinfo)
export default router;