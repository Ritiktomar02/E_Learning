import express from "express"
const router=express.Router();
import { createCourse } from "../controllers/course.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

router.route("/").post(isAuthenticated,createCourse);


export default router;