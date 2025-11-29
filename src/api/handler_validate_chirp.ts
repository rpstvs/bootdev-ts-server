import { Request, Response } from "express";
import { respondWithError, respondWithJson } from "./json.js";

import { BadRequestError } from "./error_handler.js";

const badWords = ["kerfuffle", "sharbert", "fornax"];

export async function handleChirpValidate(req: Request, res: Response) {
  type parameters = {
    body: string;
  };

  const maxChirpLength = 140;

  let body = "";

  const params: parameters = req.body;

  if (params.body.length > 140) {
    throw new BadRequestError(
      `Chirp is too long. Max length is ${maxChirpLength}`
    );
  }

  let cleanBody = CleanBody(params.body);
  respondWithJson(res, 200, {
    cleanedBody: cleanBody,
  });
}

function CleanBody(body: string) {
  //2nd approach
  let result: string;
  const redacted = "****";

  let wordArr = body.split(" ");

  for (let badWord of badWords) {
    for (let word of wordArr) {
      if (badWord === word.toLowerCase()) {
        wordArr[wordArr.indexOf(word)] = redacted;
      }
    }
  }

  result = wordArr.join(" ");
  return result;
}
