export async function handleChirpValidate(req, res) {
    let body = "";
    let resp;
    req.on("data", (chunk) => {
        body += chunk;
    });
    req.on("end", () => {
        try {
            const parsedBody = JSON.parse(body);
            console.log(parsedBody);
            let chirp = JSON.stringify(parsedBody);
            if (chirp.length > 140) {
                res.status(400).send({
                    error: "Chirp is too long",
                });
                return;
            }
            resp = {
                valid: true,
                error: "",
            };
            res.send(resp);
        }
        catch (error) {
            res.status(500).send("Something went wrong");
        }
    });
}
