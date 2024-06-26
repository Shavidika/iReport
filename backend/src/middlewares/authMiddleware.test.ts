import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { authenticate } from './authMiddleware';
import { AuthenticationError } from './errorMiddleware';
import supertest from 'supertest';
import express from 'express';
 
jest.mock('../models/User');
 
describe('authenticate middleware', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction = jest.fn();
  
  beforeEach(() => {
    let secret = 'abc123';
    mockRequest = {
      cookies: {

        jwt: jwt.sign({ userId: '123' }, secret || ''),
      },
    };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
  });
 
  it('should call next function if authentication is successful', async () => {
    (User.findById as jest.Mock).mockResolvedValue({ _id: '123', name: 'Test', email: 'test@test.com', roles: [] });
 
    await authenticate(mockRequest as Request, mockResponse as Response, nextFunction);
 
    expect(nextFunction).toHaveBeenCalled();
  });
 
  it('should return 401 if token is not found', async () => {
    mockRequest.cookies = {};
 
    await authenticate(mockRequest as Request, mockResponse as Response, nextFunction);
 
    expect(mockResponse.status).toHaveBeenCalledWith(401);
    //expect(mockResponse.send).toHaveBeenCalledWith(new AuthenticationError('Not authorized, token not found'));
  });
 
  // Add more tests for other error cases and edge cases
});
