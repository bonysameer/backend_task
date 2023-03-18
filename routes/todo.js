import express from 'express';
import { getTodo,deleteTodo,addTodo } from '../controllers/todo.js';


const router=express.Router();
router.route("/").get(getTodo);
router.route("/").post(addTodo);
router.route("/").delete(deleteTodo);


export default router