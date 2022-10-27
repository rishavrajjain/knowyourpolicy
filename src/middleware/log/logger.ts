import { NextFunction, Response, Request } from "express";
import { randomUUID } from "crypto";

export const logRequest = (req: Request, res: Response, next: NextFunction) => {
  try {
    const requestId = randomUUID();
    req.requestId = requestId;
    console.info(
      `[REQ] [${req.requestId}][${req.method}] - ${req.url} - ${
        req.body ? req.body : "END"
      }`
    );

    const cleanup = () => {
      res.removeListener("finish", logFn);
      res.removeListener("close", abortFn);
      res.removeListener("error", errorFn);
    };

    const logFn = () => {
      cleanup();

      console.info(
        `[RES] [${req.requestId}][${req.method}] - ${req.url} - ${res.statusCode} - ${req.statusMessage}`
      );
    };

    const abortFn = () => {
      cleanup();
      console.warn("Request aborted by the client");
    };

    const errorFn = (err: any) => {
      cleanup();
      console.error(
        `[${req.requestId}][${req.method}] - ${req.url} Error: ${err}`
      );
    };

    res.on("finish", logFn); // successful pipeline (regardless of its response)
    res.on("close", abortFn); // aborted pipeline
    res.on("error", errorFn); // pipeline internal error

    next();
  } catch (err) {
    console.log(err);
    next();
  }
};
