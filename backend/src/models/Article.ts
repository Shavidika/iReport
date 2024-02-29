import mongoose,{Document,Schema} from "mongoose";

export interface IArticle extends Document {
    title : String;
    content: String;
    articleImage?: String;
    upVotes?: String[];
    downVotes?: String[];
    comments?: String[];
    date: Date;
}

const articleSchema = new Schema<IArticle>({
    title:{
        type: String,
        required:true,
    },
    content:{
        type: String,
        required:true,
    },
    articleImage:{
        type: String,
        required:false,
    },
    upVotes:{
        type: [String],
        required:false,
        default: [],
    },
    downVotes:{
        type: [String],
        required:false,
        default: [],
    },
    comments:{
        type: [String],
        required:false,
        default: [],
    },
    date:{
        type: Date,
        required:true,
        default: Date.now,
    } 
})

const Article = mongoose.model("Article", articleSchema);

export default Article;