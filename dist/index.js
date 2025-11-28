import express from "express";
import { handlerReadiness } from "./api/readiness.js";
import { middlewareLogResponses } from "./middleware/logger.js";
import { middlewareMetricsInc } from "./middleware/Metrics.js";
import { logMetrics, resetMetricsHandler } from "./api/metrics_handler.js";
import { handleChirpValidate } from "./api/handler_validate_chirp.js";
import { errorHandler } from "./api/error_handler.js";
const app = express();
const PORT = 8080;
export let config = {
    fileServerHits: 0,
};
//app.use(middlewareMetricsInc);
app.use(express.json());
app.use("/app", middlewareMetricsInc, express.static("./src/app"));
app.use(middlewareLogResponses);
app.get("/api/healthz", middlewareLogResponses, handlerReadiness);
app.get("/admin/metrics", logMetrics);
app.post("/admin/reset", resetMetricsHandler);
app.post("/api/validate_chirp", async (req, res, next) => {
    try {
        await handleChirpValidate(req, res);
    }
    catch (error) {
        next(error);
    }
});
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
