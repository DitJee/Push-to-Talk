import express, { Router } from "express";
import User from "../controllers/user.controller";
import { AuthJwt } from "../middleware/index";
import UserPreCheck from "../middleware/verifyuser";

const userRouter = Router();
const authJwt = new AuthJwt();
const userController = new User();
const userPreCheck = new UserPreCheck();
/* 
    User routes     
*/
userRouter.get("/test/all", userController.allAccess);

userRouter.get("/test/user", [authJwt.verifyToken], userController.userBoard);
userRouter.get(
  "/test/mod",
  [authJwt.verifyToken, authJwt.isModerator],
  userController.moderatorBoard
);
userRouter.get(
  "/test/admin",
  [authJwt.verifyToken, authJwt.isAdmin],
  userController.adminBoard
);

export default userRouter;
