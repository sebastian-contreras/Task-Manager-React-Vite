import { Router } from "express";
import {
  getTasks,
  postTask,
  getTask,
  putTask,
  deleteTask,
} from "../controllers/tasks.controllers.js";

const router = Router();

router.get("/tasks", getTasks);

router.post("/tasks", postTask);

router.get("/tasks/:id", getTask);

router.put("/tasks/:id", putTask);

router.delete("/tasks/:id", deleteTask);

export default router;
