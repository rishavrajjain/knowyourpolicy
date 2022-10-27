import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import User from "../../models/user";
import userRepository from "../../repository/user-repository";
import Encrypter from "../../utils/encrypter";
import { status, message } from "../../utils/httpresponses";

//JWT token is passed as a header,the token is verified and if user exits with that token and is authorized this middleware attaches the user in req.user
//Authentication middleware

const encrypter = new Encrypter();

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const encryptedJwtToken = req.headers.authorization?.replace("Bearer ", "");

    if (!encryptedJwtToken) {
      return res.status(status.UNAUTHORIZED).json({
        message: message.LOGIN_REQUIRED,
      });
    }

    const token = encrypter.decrypt(encryptedJwtToken);
    if (token === "loggedOut") {
      return res.status(status.UNAUTHORIZED).json({
        message: message.LOGIN_REQUIRED,
      });
    }
    const decoded: any = jwt.verify(`${token}`, `${process.env.JWT_SECRET}`);
    const id = decoded._id;
    const user = await userRepository.Read.byId(id);
    if (!user) {
      return res.status(status.NOT_FOUND).json({
        message: message.USER_NOT_FOUND,
      });
    } else {
      req.user = user;
      req.token = token;
      next();
    }
  } catch (e) {
    console.log(e);
    return res.status(status.UNAUTHORIZED).json({
      message: message.UNAUTHORISED,
    });
  }
};

export default auth;
