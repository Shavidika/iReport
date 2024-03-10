import { Request, Response } from 'express';
import Article from '../models/Article';
import User from '../models/User';
import mongoose from 'mongoose';

// const saveArticle = async (req: Request, res: Response, title:string , content:string, articleImage:string,status:string, authorID:string | undefined) => {
//     const article = await Article.create({
//         title, content, articleImage,status, authorID
//     });

//     if (article) {
//         res.status(201).json({
//             id: article._id,
//             title: article.title,
//             content: article.content,
//             authorName: req.user?.name,
//             articleImage: article.articleImage,
//             date: article.date,
//             upvotes: article.upVotes,
//             downvotes: article.downVotes,
//             comments: article.comments,
//         });
//     } else {
//         res.status(400).json({ message: "An error occurred in creating the article" });
//     }
// }

const updateArticle = async (req: Request, res: Response, status: string) => {

    try {
        const { title, content, articleImage } = req.body;
        const authorID = req.user?._id;
        const articledetails = { title, content, articleImage, status, authorID };
        
        const { id: _id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(_id))
          return res.status(404).send("No post with that id");
        const oldArticle = await Article.findById(_id);
    
        if (oldArticle?.authorID != req.user?._id) {
          return res.status(401).send({
            message: "You are not allowed to update this post",
            oldArticle: oldArticle?.id,
            reqUser: req.user?.name,
          });
        } else if (
          oldArticle?.status == "published" ||
          oldArticle?.status == "submitted"
        ) {
          return res
            .status(401)
            .send(
              "This article already submitted or published, you are not allowed to update this post"
            );
        } else {
          const updatedPost = await Article.findByIdAndUpdate(_id, articledetails, {
            upsert: true,
            new: true,
          });
          res.json(updatedPost);
        }
      } catch (error) {
        const err = error as Error;
        res.status(500).send({ message: err.message });
      }
}



export const getSubmittedArticles = async (req: Request, res: Response) => {
    const articles = await Article.find({status: "submitted"});

    if (!articles) {
        res.status(404).json({ message: "No articles found" });
    }

    res.status(200).json(articles);
} 

export const getPublishedArticles = async (req: Request, res: Response) => {
  const articles = await Article.find({status: "published"});

    if (!articles) {
        res.status(404).json({ message: "No articles found" });
    }
  
    res.status(200).json(articles);
}

export const getDrafts = async (req: Request, res: Response) => {
    const drafts = await Article.find({status: "draft"});

    if (!drafts) {
      res.status(404).json({ message: "No articles found" });
    }

    res.status(200).json(drafts);
}

export const getDeclinedArticles = async (req: Request, res: Response) => {
    const articles = await Article.find({status: "declined"});

    if (!articles) {
      res.status(404).json({ message: "No articles found" });
    }

    res.status(200).json(articles);
}


export const getArticle = async (req: Request, res: Response) => {
    
}

export const saveDraft = async (req: Request, res: Response) => {
    //const sameArticle = await Article.findOne({ title });
    const status = "draft";
    updateArticle(req, res, status);
}; 

export const submitArticle = async (req: Request, res: Response) => {
    const status = "submitted";
    updateArticle(req, res, status);
}

export const publishArticle = async (req: Request, res: Response) => {
    const status = "published";
    try {
        //const { title, content, articleImage } = req.body;
        const articledetails = { status};
        
        const { id: _id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(_id))
          return res.status(404).send("No post with that id");
        // const oldArticle = await Article.findById(_id);
    
          const updatedPost = await Article.findByIdAndUpdate(_id, articledetails, {
            upsert: true,
            new: true,
          });
          // console.log(req.user?.roles);
          res.json(updatedPost);

        } catch (error) {
        const err = error as Error;
        res.status(500).send({ message: err.message });
    }
}

export const declineArticle = async (req: Request, res: Response) => {
    const status = "declined";
    try {
        //const { title, content, articleImage } = req.body;
        const articledetails = { status};
        
        const { id: _id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(_id))
          return res.status(404).send("No post with that id");
        // const oldArticle = await Article.findById(_id);
    
          const updatedPost = await Article.findByIdAndUpdate(_id, articledetails, {
            upsert: true,
            new: true,
          });
          // console.log(req.user?.roles);
          res.json(updatedPost);

        } catch (error) {
        const err = error as Error;
        res.status(500).send({ message: err.message });
    }
}

export const createEmptyDraft = async (req: Request, res: Response) => {
    const status = "draft";
    const authorID = req.user?._id;
    const authorName = req.user?.name;

    const article = await Article.create({
        status, authorID, authorName
    });

    if (article) {
        res.status(201).json({
            id: article._id,
            title: article.title,
            content: article.content,
            authorName: req.user?.name,
            articleImage: article.articleImage,
            date: article.date,
            upvotes: article.upVotes,
            downvotes: article.downVotes,
            comments: article.comments,
        }); 
    } else {
        res.status(400).json({ message: "An error occurred in creating the article" });
    }
}


// export const update_Article = async (req: Request, res: Response) => {
//     try {
//         const { id: _id } = req.params; 
//         const post = req.body;
//         const oldArticle = await Article.findById(_id);

//         if (!mongoose.Types.ObjectId.isValid(_id))
//             return res.status(404).send('No post with that id');

//         if (oldArticle?._id != req.user?._id) {
//             return res.status(401).send('You are not allowed to update this post');
//         }else if (oldArticle?.status == "published"|| oldArticle?.status == "submitted"){
//             return res.status(401).send('This article already submitted or published, you are not allowed to update this post');
//         }else{
//             const updatedPost = await Article.findByIdAndUpdate(_id, post, { new: true });
//             res.json(updatedPost);
//         }

//     } catch (error) {
//         const err = error as Error;
//         res.status(500).send({ message: err.message });
//     }
// }

export const deleteDraft = async (req: Request, res: Response) => {
    try {
        const { id: _id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(_id))
            return res.status(404).send('No post with that id');
        const oldArticle = await Article.findById(_id);

        if (oldArticle?.authorID != req.user?._id) {
            return res.status(401).send('You are not allowed to delete this post');
        } else if (oldArticle?.status == "published" || oldArticle?.status == "submitted") {
            return res.status(401).send('This article already submitted or published, you are not allowed to delete this post');
        } else {
            await Article.findByIdAndDelete(_id);
            res.json({ message: 'Post deleted successfully' });
        }
    } catch (error) {
        const err = error as Error;
        res.status(500).send({ message: err.message });
    }

}

export const getArticleByUser = async (req: Request, res: Response) => {

}

export const getArticleByCategory = async (req: Request, res: Response) => {

}

export const getArticleBySearch = async (req: Request, res: Response) => {

}

export const upvoteArticle = async (req: Request, res: Response) => {

}

export const downvoteArticle = async (req: Request, res: Response) => {

}

export const commentArticle = async (req: Request, res: Response) => {

}