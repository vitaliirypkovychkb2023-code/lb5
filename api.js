import express from "express";
import { expressjwt } from "express-jwt";

const app = express();
const PORT = 5555;

const SECRET = "Ripkovych";

const jwtCheck = expressjwt({
  secret: SECRET,
  algorithms: ["HS256"]
});

app.get("/asset", (req, res) => {
  res.send("Public data");
});

app.get("/asset/secret", jwtCheck, (req, res) => {
  res.send("Secret data доступний тільки з JWT");
});

app.listen(PORT, () => {
  console.log("API server running on port " + PORT);
});