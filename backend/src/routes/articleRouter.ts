import express from "express";
import {
  getSubmittedArticles,
  getPublishedArticles,
  getArticle,
  submitArticle,
  saveDraft,
  update_Article,
  deleteArticle,
  getArticleByUser,
  getArticleByCategory,
  getArticleBySearch,
  upvoteArticle,
  downvoteArticle,
  commentArticle,
  createEmptyDraft,
} from "../controllers/articleController";

const router = express.Router();

router.get("/submitted/all", getSubmittedArticles);
router.get("/published/all", getPublishedArticles);
router.get("/:id", getArticle);

router.post("/draft", createEmptyDraft);
router.put("/submit/:id", submitArticle);
router.put("/draft/:id", saveDraft);
router.delete("/:id", deleteArticle);

router.get("/user/:id", getArticleByUser);
router.get("/category/:category", getArticleByCategory);
router.get("/search", getArticleBySearch);

router.post("/:id/react", upvoteArticle);
router.post("/:id/react", downvoteArticle);
router.post("/:id/comment", commentArticle);

export default router;
