import { config } from "../index.js";
export async function logMetrics(req, res) {
    res.set("Content-type", "text/plain");
    console.log(`Hits: ${config.fileServerHits}`);
    res.send(`Hits: ${config.fileServerHits}`);
}
export async function resetMetricsHandler(req, res) {
    config.fileServerHits = 0;
    res.send(`${config.fileServerHits}`);
}
