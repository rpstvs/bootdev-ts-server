import express from "express";
import { handlerReadiness } from "./api/readiness.js";
import { middlewareLogResponses } from "./middleware/logger.js";
import { middlewareMetricsInc } from "./middleware/Metrics.js";
import { logMetrics, resetMetricsHandler } from "./api/metrics_handler.js";
const app = express();
const PORT = 8080;
export let config = {
    fileServerHits: 0,
};
//app.use(middlewareMetricsInc);
app.use("/app", middlewareMetricsInc, express.static("./src/app"));
app.use(middlewareLogResponses);
app.get("/healthz", middlewareLogResponses, handlerReadiness);
app.get("/metrics", logMetrics);
app.get("/reset", resetMetricsHandler);
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
