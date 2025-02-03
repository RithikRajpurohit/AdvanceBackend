
import express from "express" 
//import { login, register } from "../controller/user.js";
import { createTodo, deletetodo, getalltodos, updateTodod } from "../controller/todo.js";

const router = express.Router();

router.route("/").post(createTodo).get(getalltodos);
router.route("/:id").put(updateTodod).delete(deletetodo);


export default router;