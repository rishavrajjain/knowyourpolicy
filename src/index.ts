import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { logRequest } from "./middleware/log/logger";
import { configs } from "./config/config";

import * as dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes";
dotenv.config({ path: __dirname + "/.env" });

const start = async () => {
  const app = express();

  //middlewares
  app.use(morgan("combined"));
  app.use(logRequest);
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: configs.allowedCrossOrigins,
      credentials: true,
    })
  );
  app.use(function (req, res, next) {
    res.header("Content-Type", "application/json;charset=UTF-8");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.use(router);

  //connect to the database
  console.log(process.env.MONGO_PASSWORD);
  const mongoURI = `mongodb+srv://abhay:${process.env.MONGO_PASSWORD}@cluster0.e26vvqq.mongodb.net/?retryWrites=true&w=majority`;
  await mongoose.connect(mongoURI);
  console.log("Connected to DB");

  const port = process.env.PORT || 8068;
  app.listen(port, () => {
    console.log("Listening on port " + port);
  });
};

start();
