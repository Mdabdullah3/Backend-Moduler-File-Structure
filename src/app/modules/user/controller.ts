
// Create For Route function (Controller) For Follwing Code 

// Example 

import { NextFunction, Request, Response } from "express";
import {
  getUsersFromDB,
} from "./service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const user = await createUserToDB(data);
  res.status(200).json({
    status: "success",
    data: user,
  });
};

