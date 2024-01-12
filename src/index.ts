import express from "express";
import nftRoute from "./routes/nftRoute";
const app = express();
const port = 5000;
app.get("/health", (_, res) => {
  res.status(200).send({ status: "ok" });
});

app.use("/nft", nftRoute);
app.listen(port, () => console.log(`Running on port ${port}`));
