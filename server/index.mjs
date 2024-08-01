import express from "express";
import cors from "cors";
import routes from "./src/routes/priceBondChecker.mjs";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", routes);

const PORT = 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
