import express from "express";
import { getReporterRequests, getUser, getUsers, makeAdmin, makeReader, makeReporter, makeReporterRequest } from "../controllers/userController";
import { authorize } from "../middlewares/authMiddleware";
import { Roles } from "../constants";

const router = express.Router();

router.get(
  "/:id",
  authorize([Roles.Admin, Roles.Reader, Roles.Reporter,Roles.RporterRequest]),
  getUser
);

router.get("/", authorize([Roles.Admin]), getUsers);

router.post("/requestReporter", authorize([Roles.Reader]), makeReporterRequest);

router.get("/get/reporterRequests", authorize([Roles.Admin]), getReporterRequests);

router.post("/makeReporter/:id", authorize([Roles.Admin]), makeReporter);
router.post("/makeAdmin/:id", authorize([Roles.Admin]), makeAdmin);
router.post("/makeReader/:id", authorize([Roles.Admin]), makeReader);

export default router;
