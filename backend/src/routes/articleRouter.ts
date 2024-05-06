import express from "express";
import {
  getSubmittedArticles,
  getPublishedArticles,
  getArticle,
  submitArticle,
  saveDraft,
  deleteDraft,
  getArticleByUser,
  getArticleByCategory,
  getArticleBySearch,
  upvoteArticle,
  downvoteArticle,
  commentArticle,
  createEmptyDraft,
  publishArticle,
  declineArticle,
  getDrafts,
  getDeclinedArticles,
  getAllArticles,
} from "../controllers/articleController";
import { authorize } from "../middlewares/authMiddleware";
import { Roles } from "../constants";

const router = express.Router();

router.get("/submitted/all", authorize([Roles.Admin]), getSubmittedArticles);
// router.get("published/all", getPublishedArticles);
router.get("/drafts/all", authorize([Roles.Reporter]), getDrafts);
router.get("/declined/all", authorize([Roles.Admin]), getDeclinedArticles);
router.get("/:id", getArticle);
router.get("/all",getAllArticles);

router.post(
  "/draft",
  authorize([Roles.Reporter, Roles.Admin]),
  createEmptyDraft
);
router.put(
  "/submit/:id",
  authorize([Roles.Reporter, Roles.Admin]),
  submitArticle
);
router.put("/draft/:id", authorize([Roles.Reporter]), saveDraft);
router.put("/publish/:id", authorize([Roles.Admin]), publishArticle);
router.put("/decline/:id", authorize([Roles.Admin]), declineArticle);
router.delete("/delete/:id", authorize([Roles.Reporter]), deleteDraft);

router.get("/user/:id", getArticleByUser);
router.get("/category/:category", getArticleByCategory);
router.get("/search", getArticleBySearch);

router.post("/:id/react", upvoteArticle);
router.post("/:id/react", downvoteArticle);
router.post("/:id/comment", commentArticle);

export default router;
