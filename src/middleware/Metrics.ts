import { Request, Response, NextFunction } from "express";
import { config } from "../index.js";

export async function middlewareMetricsInc(
  req: Request,
  res: Response,
  next: NextFunction
) {
  config.fileServerHits++;
  next();
}
