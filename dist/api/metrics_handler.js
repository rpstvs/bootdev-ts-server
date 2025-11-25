import { config } from "../index.js";
export async function logMetrics(req, res) {
    res.set("Content-type", "text/html; charset=utf-8");
    console.log(`Hits: ${config.fileServerHits}`);
    res.send(`<html>
  <body>
    <h1>Welcome, Chirpy Admin</h1>
    <p>Chirpy has been visited ${config.fileServerHits} times!</p>
  </body>
</html>
`);
}
export async function resetMetricsHandler(req, res) {
    config.fileServerHits = 0;
    res.send(`${config.fileServerHits}`);
}
