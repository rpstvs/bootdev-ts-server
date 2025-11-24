import { config } from "../index.js";
export async function middlewareMetricsInc(req, res, next) {
    config.fileServerHits++;
    next();
}
