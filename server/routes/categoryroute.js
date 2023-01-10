import express from "express";
import { categoryinfo } from "../controllers/categorycontrollers.js";
const router = express.Router();
router.route("/api/v1/categoryinfo").get(categoryinfo);
export default router;
