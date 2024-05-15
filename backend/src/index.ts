import express from "express";
import authRouter from "./routes/authRouter";
import connectUserDB from "./connections/userDB"
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser = require("cookie-parser");
import { errorHandler } from "./middlewares/errorMiddleware";
import { authenticate } from "./middlewares/authMiddleware";
import userRouter from "./routes/userRouter";
import helmet from "helmet";
import cors from "cors";
import articleRouter from "./routes/articleRouter";
import openRouter from "./routes/openRouter";

dotenv.config();

export const app = express();

interface UserBasicInfo {
    _id: String;
    name: String;
    email: String;
    roles: String[];
    userImage?: String;
  }
  
  declare global {
    namespace Express {
      interface Request {
        user?: UserBasicInfo | null;
      }
    }
  }
  
  
  const port = process.env.PORT || 8000;
  app.use(helmet());

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
  
  app.use(cookieParser());
  app.use(bodyParser.json()); // To recognize the req obj as a json obj
  app.use(bodyParser.urlencoded({ extended: true })); // To recognize the req obj as strings or arrays. extended true to handle nested objects also


app.listen(port,()=>{
    console.log('Server is running on port', port); 
});


app.use("/user",authRouter);
app.use("/article",authenticate, articleRouter);
app.use("/articles",openRouter);
app.use("/users",authenticate, userRouter)
app.use(errorHandler);
connectUserDB();