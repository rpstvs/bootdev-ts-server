import { Request, Response } from "express";
import { json } from "stream/consumers";

export async function handleChirpValidate(req: Request, res: Response) {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    try {
      const parsedBody = JSON.parse(body);
    } catch (error) {
      res.status(400).send("Invalid Json");
    }
  });
}
