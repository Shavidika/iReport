import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/User";
import asyncHandler from "express-async-handler";
import { AuthenticationError } from "./errorMiddleware";

const authenticate = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      let token = req.cookies.jwt;

      if (!token) {
        res.status(401);
        throw new AuthenticationError("Not authorized, token not found");
      }

      const jwtSecret = process.env.JWT_SECRET || "";
      const decoded = jwt.verify(token, jwtSecret) as JwtPayload;

      if (!decoded || !decoded.userId) {
        res.status(401);
        throw new AuthenticationError("Not authorized, userId not found");
      }

      const user = await User.findById(decoded.userId, "_id name email"); 

      if (!user) {
        res.status(401);
        throw new AuthenticationError("Not authorized, user not found");
      } 

      req.user = user;
      next();
    } catch (e) {
      res.status(401);
      throw new AuthenticationError("Not authorized, invalid token");
    }
  }
);

export { authenticate }; 