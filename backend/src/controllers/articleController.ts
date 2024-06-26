import { Request, Response } from 'express';
import Article from '../models/Article';
import User from '../models/User';
import mongoose from 'mongoose';
import exp from 'constants';

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

export const updateArticle = async (req: Request, res: Response, status: string) => {

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

const combineAuthor = async (article: any) => {
    const author = await User.findById(article.authorID);
    return {
        id: article._id,
        title: article.title,
        content: article.content,
        authorName: author?.name,
        authorImage: author?.userImage,
        articleImage: article.articleImage,
        date: article.date,
        upvotes: article.upVotes,
        downvotes: article.downVotes,
        comments: article.comments,
        status: article.status
    };
}

export const getPublishedArticles = async (req: Request, res: Response) => {
  const articles = await Article.find({status: "published"});

    if (!articles) {
        res.status(404).json({ message: "No articles found" });
    }
  
    const articlesWithAuthor = await Promise.all(articles.map(combineAuthor));
    res.status(200).json(articlesWithAuthor);
}

export const getSubmittedArticles = async (req: Request, res: Response) => {
    const articles = await Article.find({status: "submitted"});

    if (!articles) {
        res.status(404).json({ message: "No articles found" });
    }

    // res.status(200).json(articles);
    const articlesWithAuthor = await Promise.all(articles.map(combineAuthor));
    res.status(200).json(articlesWithAuthor);
} 


export const getDrafts = async (req: Request, res: Response) => {
  const userId = req.user?._id;
    const drafts = await Article.find({status: "draft",authorID:userId});

    if (!drafts) {
      res.status(404).json({ message: "No articles found" });
    }
    const articlesWithAuthor = await Promise.all(drafts.map(combineAuthor));
    res.status(200).json(articlesWithAuthor);
}

export const getDeclinedArticles = async (req: Request, res: Response) => {
    const articles = await Article.find({status: "declined"});

    if (!articles) {
      res.status(404).json({ message: "No articles found" });
    }

    // res.status(200).json(articles);
    const articlesWithAuthor = await Promise.all(articles.map(combineAuthor));
    res.status(200).json(articlesWithAuthor);
}

export const getAllArticles = async(req:Request,res:Response)=>{
    const articles = await Article.find();
    if (!articles) {
        res.status(404).json({ message: "No articles found" });
    }
    // res.status(200).json(articles);
    const articlesWithAuthor = await Promise.all(articles.map(combineAuthor));
    res.status(200).json(articlesWithAuthor);
}

export const getArticle = async (req: Request, res: Response) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({message: "No article with this id"});
  const article = await Article.findById(_id);
  res.status(200).json(article);   
}

export const saveDraft =async(req:Request,res:Response)=>{
    const status = "draft";
    updateArticle(req, res, status);
}

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
          res.status(200).json(updatedPost);

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

export const getArticleByAuthor = async (req: Request, res: Response) => {
  const { id: _id } = req.params;
  const articles = await Article.find({ authorID: _id, status: "published" });
  if (!articles) {
    res.status(404).json({ message: "No articles found" });
  }
  res.status(200).json(articles);

}

export const getArticleByCategory = async (req: Request, res: Response) => {

}

export const getArticleBySearch = async (req: Request, res: Response) => {


}

const idToName = async (array:Array<String>)=>{
  const newArray = await Promise.all(array.map(async (id:String)=>{
    const user = await User.findById(id);
    return user?.name;
  }));
  const filteredArray = newArray.filter((item): item is String => item !== undefined);

  return filteredArray;
}

export const upvoteArticle = async (req: Request, res: Response) => {
  const userID = req.user?._id;
  const articleID = req.params.id;   
  let upVotedNames:Array<String>;
  let downVotedNames:Array<String>;
  
  try{
    const article = await Article.findById(articleID);
    if (!userID || !articleID || article?.status != "published") {
      res.status(400).json({message: "User ID or Article ID is missing"});
      return;
    }
    if(article){
      if(!article.upVotes){
        article.upVotes = [];
      }
      if(!article.downVotes){
        article.downVotes = [];
      }

      if(article.upVotes.includes(userID)){
        article.upVotes = article.upVotes.filter(id => id != userID);
        await article.save();
        
        upVotedNames = await idToName(article.upVotes);
        downVotedNames = await idToName(article.downVotes);
        
        res.status(200).json({upVotedNames,downVotedNames});
        return;
      }else if(article.downVotes.includes(userID)){
        article.downVotes = article.downVotes.filter(id => id != userID);
        article.upVotes.push(userID);
        await article.save();

        upVotedNames = await idToName(article.upVotes);
        downVotedNames = await idToName(article.downVotes);

        res.status(200).json({upVotedNames,downVotedNames});
        return;
      }
      else{
        article.upVotes.push(userID);
        await article.save();

        upVotedNames = await idToName(article.upVotes);
        downVotedNames = await idToName(article.downVotes);

        res.status(200).json({upVotedNames,downVotedNames});
        return;
      }
    }
    else{
      res.status(404).json({message: "Article not found"});
    }
  }
  catch(error){
    const err = error as Error;
    res.status(500).json({message: err.message});
  }
}

export const downvoteArticle = async (req: Request, res: Response) => {
  const userID = req.user?._id;
  const articleID = req.params.id;   
  let upVotedNames:Array<String>;
  let downVotedNames:Array<String>;
  
  try{
    const article = await Article.findById(articleID);
    if (!userID || !articleID || article?.status != "published") {
      res.status(400).json({message: "User ID or Article ID is missing"});
      return;
    }
    if(article){
      if(!article.upVotes){
        article.upVotes = [];
      }
      if(!article.downVotes){
        article.downVotes = [];
      }

      if(article.downVotes.includes(userID)){
        article.downVotes = article.downVotes.filter(id => id != userID);
        await article.save();
        
        upVotedNames = await idToName(article.upVotes);
        downVotedNames = await idToName(article.downVotes);
        
        res.status(200).json({upVotedNames,downVotedNames});
        return;
      }else if(article.upVotes.includes(userID)){
        article.upVotes = article.upVotes.filter(id => id != userID);
        article.downVotes.push(userID);
        await article.save();

        upVotedNames = await idToName(article.upVotes);
        downVotedNames = await idToName(article.downVotes);

        res.status(200).json({upVotedNames,downVotedNames});
        return;
      }
      else{
        article.downVotes.push(userID);
        await article.save();

        upVotedNames = await idToName(article.upVotes);
        downVotedNames = await idToName(article.downVotes);

        res.status(200).json({upVotedNames,downVotedNames});
        return;
      }
    }
    else{
      res.status(404).json({message: "Article not found"});
    }
  }
  catch(error){
    const err = error as Error;
    res.status(500).json({message: err.message});
  }

}

export const commentArticle = async (req: Request, res: Response) => {

}