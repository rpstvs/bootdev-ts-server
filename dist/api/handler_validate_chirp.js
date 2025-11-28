import { respondWithJson } from "./json.js";
const badWords = ["kerfuffle", "sharbert", "fornax"];
export async function handleChirpValidate(req, res) {
    let body = "";
    const params = req.body;
    if (params.body.length > 140) {
        // respondWithError(res, 400, "Chirp is too long");
        // return;
        throw new Error();
    }
    let cleanBody = CleanBody(params.body);
    respondWithJson(res, 200, {
        cleanedBody: cleanBody,
    });
}
function CleanBody(body) {
    //2nd approach
    let result;
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
