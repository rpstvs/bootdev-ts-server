export function errorHandler(err, req, res, next) {
    console.error("Uh oh, spaghetti-o");
    res.status(500).json({
        error: "Boots has fallen",
    });
}
