import { Request, Response } from "express";
import { config } from "../index.js";

export async function logMetrics(req: Request, res: Response) {
  res.set("Content-type", "text/plain");
  console.log(`Hits: ${config.fileServerHits}`);
  res.send(`Hits: ${config.fileServerHits}`);
}
export async function resetMetricsHandler(req: Request, res: Response) {
  config.fileServerHits = 0;
  res.send(`${config.fileServerHits}`);
}
