import express from "express";
import { getUser, getUsers, makeAdmin, makeReader, makeReporter } from "../controllers/userController";
import { authorize } from "../middlewares/authMiddleware";
import { Roles } from "../constants";

const router = express.Router();

router.get(
  "/:id",
  authorize([Roles.Admin, Roles.Reader, Roles.Reporter]),
  getUser
);

router.get("/", authorize([Roles.Admin]), getUsers);

router.post("/makeReporter/:id", authorize([Roles.Admin]), makeReporter);
router.post("/makeAdmin/:id", authorize([Roles.Admin]), makeAdmin);
router.post("/makeReader/:id", authorize([Roles.Admin]), makeReader);

export default router;
