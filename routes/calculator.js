import express from 'express';
import { getnumber, updatenumber, deletenumber } from '../controllers/calculator.js';


const router=express.Router();
router.route("/").get(getnumber);
router.route("/").put(updatenumber);
router.route("/").delete(deletenumber);


export default router