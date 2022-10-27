import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import auth from "../middleware/auth/auth";
import { login, signup } from "../services/user";
import { status, message } from "../utils/httpresponses";

const router = express.Router();

router.post(
  "/signup",
  body("name").not().isEmpty(),
  body("email").isEmail(),
  body("password").isLength({
    min: 6,
    max: 20,
  }),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(status.BAD_REQUEST).json({
        errors: errors.array(),
      });
    }

    try {
      const { name, email, password } = req.body;
      const { encryptedJwtToken, ...userDetails } = await signup(
        name,
        email,
        password
      );
      res.status(status.OK).json({
        user: {
          ...userDetails,
        },
        token: encryptedJwtToken,
      });
    } catch (err: any) {
      console.log(err);
      if (err.code >= 500 || !err.code) {
        return res.status(status.SERVER_ERROR).json({
          message: message.SERVER_ERROR,
        });
      }
      return res.status(err.code).json({
        message: err.message,
      });
    }
  }
);

router.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({
    min: 6,
    max: 20,
  }),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(status.BAD_REQUEST).json({
        errors: errors.array(),
      });
    }

    try {
      const { email, password } = req.body;
      const { encryptedJwtToken, ...userDetails } = await login(
        email,
        password
      );
      res.status(status.OK).json({
        user: {
          ...userDetails,
        },
        token: encryptedJwtToken,
      });
    } catch (err: any) {
      console.log(err);
      if (err.code >= 500 || !err.code) {
        return res.status(status.SERVER_ERROR).json({
          message: message.SERVER_ERROR,
        });
      }
      return res.status(err.code).json({
        message: err.message,
      });
    }
  }
);

router.get("/loggedIn", auth, async (req: Request, res: Response) => {
  const { ...userDetails } = req.user.toJSON();
  return res.status(status.OK).json({
    loggedIn: true,
    ...userDetails,
  });
});

export default router;
