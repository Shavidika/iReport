import { Request, Response } from "express";
import User from "../models/User";
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import Article from "../models/Article";
import { Roles } from "../constants";
import { JwtPayload } from "jsonwebtoken";
import * as jwt from "jsonwebtoken";

const changeRole = async (req: Request, res: Response, roles: string) => {
  try {
    const userDetails = { roles };

    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No users with that id");

    const updatedPost = await User.findByIdAndUpdate(_id, userDetails, {
      upsert: true,
      new: true,
    });
    res.json(updatedPost);
  } catch (error) {
    const err = error as Error;
    res.status(500).send({ message: err.message });
  }
};

const getUser = async (req: Request, res: Response) => {
  const userId = req.user?._id;
  const user = await User.findById(userId, "name email userImage");

  if (!user) {
    res.status(400);
  }

  res.status(200).json(user);
};

const getUsers = asyncHandler(async (req: Request, res: Response) => {
  const users = await User.find({}, "name email");

  res.status(200).json(
    users.map((user) => {
      return { id: user._id, name: user.name, email: user.email };
    })
  );
});

export const makeReporter = async (req: Request, res: Response) => {
  const roles = Roles.Reporter;
  changeRole(req, res, roles);
};

export const makeAdmin = async (req: Request, res: Response) => {
  const roles = Roles.Admin;
  changeRole(req, res, roles);
};

export const makeReader = async (req: Request, res: Response) => {
  const roles = Roles.Reader;
  changeRole(req, res, roles);
};

export const makeReporterRequest = async (req: Request, res: Response) => {
try {
    const token = req.cookies.jwt;
    const jwtSecret = process.env.JWT_SECRET || "";
    const cv_link = req.body.cv_link;
    const decoded = jwt.verify(token, jwtSecret) as JwtPayload;
    const id = decoded.userId;
    const roles = Roles.RporterRequest;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No users with that id");
  
    let updatedPost = await User.findByIdAndUpdate(
      id,
      { roles, cv_link},
      {
        upsert: true,
        new: true,
      }
    );

    res.json(updatedPost);
} catch (error) {
  const err = error as Error;
  res.status(500).send({ message: err.message });
}
};

export const getReporterRequests = asyncHandler(async (req: Request, res: Response) => {
  const users = await User.find({ roles: Roles.RporterRequest }, "name email cv_link");

  res.status(200).json(
    users.map((user) => {
      return { id: user._id, name: user.name, email: user.email, cv_link: user.cv_link };
    })
  );
});

export { getUser, getUsers };
