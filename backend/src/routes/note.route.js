import express from "express";
import {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
  getSingleNote,
} from "../controllers/note.controller.js";
import { protectRoute } from "../utils/protectRoute.js";

const router = express.Router();

router.get("/", protectRoute, getNotes);

router.post("/", protectRoute, createNote);

router.put("/:id", protectRoute, updateNote);

router.delete("/:id", protectRoute, deleteNote);

router.get("/:id", protectRoute, getSingleNote);
export default router;
