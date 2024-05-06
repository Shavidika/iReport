// this router is used for the controllers that is not required to be authenticated

import express from "express";
import {
  getAllArticles,
  getPublishedArticles,
} from "../controllers/articleController";



const router = express.Router();

router.get("/published/all", getPublishedArticles);

router.get("/all",getAllArticles);

export default router;
