import { respondWithError } from "./json.js";
export function errorHandler(err, _, res, __) {
    let status = 400;
    let message = "Chirp is too long. Max length is 140";
    console.log(err.message);
    if (err instanceof NotFoundError) {
        res.status(404).send("Not Found");
    }
    respondWithError(res, status, message);
}
class NotFoundError extends Error {
    constructor(message) {
        super(message);
    }
}
