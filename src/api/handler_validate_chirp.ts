import { Request, Response } from "express";
import { respondWithError, respondWithJson } from "./json.js";

export async function handleChirpValidate(req: Request, res: Response) {
  type parameters = {
    body: string;
  };

  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  let params: parameters;

  req.on("end", () => {
    try {
      params = JSON.parse(body);
    } catch (error) {
      res.status(500).send("Something went wrong");
    }

    if (params.body.length > 140) {
      respondWithError(res, 400, "Chirp is too long");
      return;
    }

    respondWithJson(res, 200, {
      valid: true,
    });
  });
}
