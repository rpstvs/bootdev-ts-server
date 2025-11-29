import { Request, Response, NextFunction } from "express";
import { respondWithError } from "./json.js";

export function errorHandler(
  err: Error,
  _: Request,
  res: Response,
  __: NextFunction
) {
  let status = 500;
  let message = "Chirp is too long. Max length is 140";

  console.log(err.message);
  if (err instanceof BadRequestError) {
    status = 400;
    message = err.message;
  } else if (err instanceof UserNotAuthenticatedError) {
    status = 401;
    message = err.message;
  } else if (err instanceof UserForbiddenError) {
    status = 403;
    message = err.message;
  } else if (err instanceof NotFoundError) {
    status = 404;
    message = err.message;
  }

  respondWithError(res, status, message);
}

export class BadRequestError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class UserNotAuthenticatedError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class UserForbiddenError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
  }
}
