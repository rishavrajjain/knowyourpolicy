import express, { Request, Response } from "express";
import { body } from "express-validator";
import auth from "../middleware/auth/auth";
import { analyseDocument, getCategories } from "../services/expert-ai";

const router = express.Router();

router.post(
  "/policy",
  body("policy").exists().isString(),
  auth,
  async (req: Request, res: Response) => {
    const { policy } = req.body;
    const result = await analyseDocument(policy);

    res.status(200).json(result);
  }
);

export default router;
