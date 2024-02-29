import express from "express";
import { 
    getArticles, 
    getArticle, 
    createArticle, 
    updateArticle, 
    deleteArticle, 
    getArticleByUser, 
    getArticleByCategory, 
    getArticleBySearch, 
    upvoteArticle, downvoteArticle, commentArticle } from "../controllers/articleController";

const router = express.Router();

router.get("/",getArticles);
router.get("/:id",getArticle);

router.post("/new",createArticle);
router.put("/:id",updateArticle);
router.delete("/:id",deleteArticle);

router.get("/user/:id",getArticleByUser);
router.get("/category/:category",getArticleByCategory);
router.get("/search",getArticleBySearch);

router.post("/:id/react",upvoteArticle);
router.post("/:id/react",downvoteArticle);
router.post("/:id/comment",commentArticle);

export default router;
