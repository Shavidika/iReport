import express from "express";
import { getUser, getUsers } from "../controllers/userController";
import { authorize } from "../middlewares/authMiddleware";
import { Roles } from "../constants";

const router = express.Router();

router.get(
    "/:id",
    authorize([Roles.Admin, Roles.Reader, Roles.Reporter]),
    getUser
  );
  
  router.get("/", authorize([Roles.Admin]), getUsers);
 
export default router; 