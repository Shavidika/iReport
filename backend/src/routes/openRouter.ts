// this router is used for the controllers that is not required to be authenticated

import express from "express";
import {
  getPublishedArticles,
} from "../controllers/articleController";



const router = express.Router();

router.get("/all", getPublishedArticles);

export default router;
