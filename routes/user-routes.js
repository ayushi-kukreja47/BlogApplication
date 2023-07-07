import express from "express";
import { getAllUser, login, signup } from "../controllers/user-controller";

const router=express.Router();  //will provide reference to this router

router.get("/",getAllUser);
router.post("/signup",signup);
router.post("/login",login)

export default router;
