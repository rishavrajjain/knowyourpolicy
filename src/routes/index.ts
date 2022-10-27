import express, { Request, Response } from "express";
import userRoutes from "./user";
import analysisRoutes from "./analysis";

const router = express.Router();

router.get("/hello", async (req: Request, res: Response) => {
  res.status(200).send(`Wasssssuppppppp`);
});

router.use("/user", userRoutes);
router.use("/analysis", analysisRoutes);

export default router;
