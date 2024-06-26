import {
  getPublishedArticles,
  getDeclinedArticles,
  getAllArticles,
  getArticle,
  submitArticle,
  updateArticle,
  getSubmittedArticles,
  getDrafts
} from "../controllers/articleController"; // import your functions
import Article from "../models/Article";
import User from "../models/User";
import mongoose, { Schema, Document } from "mongoose";
import { Request, Response } from "express";



jest.mock("../models/Article");
jest.mock("../models/User");
jest.mock("mongoose", () => {
  const originalMongoose = jest.requireActual("mongoose");
  originalMongoose.Types.ObjectId.isValid = jest.fn();
  return originalMongoose;
});
// jest.mock('../controllers/articleController', () => ({
//     updateArticle: jest.fn(),
// }));
// jest.mock('../models/Article', () => ({
//   findById: jest.fn(),
//   findByIdAndUpdate: jest.fn(),
// }));

describe("Article Controller", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
      json: jest.fn(),
    };
  });

  

  describe("getPublishedArticles", () => {
    it("should return all published articles with author details", async () => {
      const mockArticles = [
        {
          _id: "123",
          authorID: "456",
          status: "published",
          articleImage: "Image 1",
          comments: [],
          content: "Content 1",
          date: new Date(),
          downvotes: undefined,
          id: "123",
          title: "Title 1",
          upvotes: undefined,
        },
        {
          _id: "789",
          authorID: "012",
          status: "published",
          articleImage: "Image 2",
          comments: [],
          content: "Content 2",
          date: new Date(),
          downvotes: undefined,
          id: "789",
          title: "Title 2",
          upvotes: undefined,
        },
      ];
      const mockUsers = [
        { _id: "456", name: "Author 1", userImage: "Image 1" },
        { _id: "012", name: "Author 2", userImage: "Image 2" },
      ];
      (Article.find as jest.Mock).mockResolvedValue(mockArticles);
      (User.findById as jest.Mock)
        .mockResolvedValueOnce(mockUsers[0])
        .mockResolvedValueOnce(mockUsers[1]);

      const { _id, authorID, ...articleWithoutIds } = mockArticles[0];
      const {
        _id: _,
        authorID: __,
        ...secondArticleWithoutIds
      } = mockArticles[1];

      await getPublishedArticles(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockResponse.json).toHaveBeenCalledWith([
        {
          ...articleWithoutIds,
          authorName: mockUsers[0].name,
          authorImage: mockUsers[0].userImage,
        },
        {
          ...secondArticleWithoutIds,
          authorName: mockUsers[1].name,
          authorImage: mockUsers[1].userImage,
        },
      ]);
    });

    // Add more tests for other cases
  });

  describe("getDeclinedArticles", () => {
    it("should return all declined articles", async () => {
      const mockArticles = [
        {
          _id: "123",
          status: "declined",
          articleImage: "Image 1",
          comments: [],
          content: "Content 1",
          date: new Date(),
          downvotes: undefined,
          id: "123",
          title: "Title 1",
          upvotes: undefined,
        },
        {
          _id: "789",
          status: "declined",
          articleImage: "Image 2",
          comments: [],
          content: "Content 2",
          date: new Date(),
          downvotes: undefined,
          id: "789",
          title: "Title 2",
          upvotes: undefined,
        },
      ];

      (Article.find as jest.Mock).mockResolvedValue(mockArticles);

      const mockRequest = {} as Request;
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      await getDeclinedArticles(mockRequest, mockResponse);

      expect(Article.find).toHaveBeenCalledWith({ status: "declined" });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockArticles);
    });

    it("should return a 404 if no articles are found", async () => {
      (Article.find as jest.Mock).mockResolvedValue(null);

      const mockRequest = {} as Request;
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      await getDeclinedArticles(mockRequest, mockResponse);

      expect(Article.find).toHaveBeenCalledWith({ status: "declined" });
      expect(mockResponse.status).toHaveBeenCalledWith(404);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "No articles found",
      });
    });
  });

  describe("getAllArticles", () => {
    it("should return all articles", async () => {
      const mockArticles = [
        {
          _id: "123",
          status: "published",
          articleImage: "Image 1",
          comments: [],
          content: "Content 1",
          date: new Date(),
          downvotes: undefined,
          id: "123",
          title: "Title 1",
          upvotes: undefined,
        },
        {
          _id: "789",
          status: "published",
          articleImage: "Image 2",
          comments: [],
          content: "Content 2",
          date: new Date(),
          downvotes: undefined,
          id: "789",
          title: "Title 2",
          upvotes: undefined,
        },
      ];

      (Article.find as jest.Mock).mockResolvedValue(mockArticles);

      const mockRequest = {} as Request;
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      await getAllArticles(mockRequest, mockResponse);

      expect(Article.find).toHaveBeenCalled();
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockArticles);
    });

    it("should return a 404 if no articles are found", async () => {
      (Article.find as jest.Mock).mockResolvedValue(null);

      const mockRequest = {} as Request;
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      await getAllArticles(mockRequest, mockResponse);

      expect(Article.find).toHaveBeenCalled();
      expect(mockResponse.status).toHaveBeenCalledWith(404);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "No articles found",
      });
    });
  });

  describe("getArticle", () => {
    it("should return the article with the given id", async () => {
      const mockArticle = {
        _id: "123",
        status: "published",
        articleImage: "Image 1",
        comments: [],
        content: "Content 1",
        date: new Date(),
        downvotes: undefined,
        id: "123",
        title: "Title 1",
        upvotes: undefined,
      };

      (mongoose.Types.ObjectId.isValid as jest.Mock).mockReturnValue(true);
      (Article.findById as jest.Mock).mockResolvedValue(mockArticle);

      mockRequest.params = { id: "123" };

      await getArticle(mockRequest as Request, mockResponse as Response);

      expect(mongoose.Types.ObjectId.isValid).toHaveBeenCalledWith("123");
      expect(Article.findById).toHaveBeenCalledWith("123");
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockArticle);
    });

    it("should return a 404 if the id is not valid", async () => {
      (mongoose.Types.ObjectId.isValid as jest.Mock).mockReturnValue(false);

      mockRequest.params = { id: "123" };

      await getArticle(mockRequest as Request, mockResponse as Response);

      expect(mongoose.Types.ObjectId.isValid).toHaveBeenCalledWith("123");
      expect(mockResponse.status).toHaveBeenCalledWith(404);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "No article with this id",
      });
    });
  });


describe('getSubmittedArticles', () => {
  it('should return the submitted articles', async () => {
    const mockRequest = {} as Request;
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    const mockArticles = [{ title: 'Article 1' }, { title: 'Article 2' }];
    (Article.find as jest.Mock).mockResolvedValue(mockArticles);

    await getSubmittedArticles(mockRequest, mockResponse);

    expect(Article.find).toHaveBeenCalledWith({ status: 'submitted' });
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(mockArticles);
  });

  it('should return a 404 if no articles are found', async () => {
    const mockRequest = {} as Request;
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    (Article.find as jest.Mock).mockResolvedValue(null);

    await getSubmittedArticles(mockRequest, mockResponse);

    expect(Article.find).toHaveBeenCalledWith({ status: 'submitted' });
    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.json).toHaveBeenCalledWith({ message: 'No articles found' });
  });
});

describe('getDrafts', () => {
  it('should return the drafts', async () => {
    const mockRequest = {} as Request;
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    const mockDrafts = [{ title: 'Draft 1' }, { title: 'Draft 2' }];
    (Article.find as jest.Mock).mockResolvedValue(mockDrafts);

    await getDrafts(mockRequest, mockResponse);

    expect(Article.find).toHaveBeenCalledWith({ status: 'draft' });
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(mockDrafts);
  });

  it('should return a 404 if no drafts are found', async () => {
    const mockRequest = {} as Request;
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    (Article.find as jest.Mock).mockResolvedValue(null);

    await getDrafts(mockRequest, mockResponse);

    expect(Article.find).toHaveBeenCalledWith({ status: 'draft' });
    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.json).toHaveBeenCalledWith({ message: 'No articles found' });
  });
});

});
