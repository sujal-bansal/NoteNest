import express from "express";
import {
  signup,
  login,
  logout,
  getProfile,
  checkAuth,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../utils/protectRoute.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile/:id", protectRoute, getProfile);
router.get("/check", protectRoute, checkAuth);

export default router;
