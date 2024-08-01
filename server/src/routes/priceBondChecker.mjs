import { Router } from "express";
import axios from "axios";
import { config } from "dotenv";
config();

const router = Router();

const url = process.env.API_URL;

router.post("/search", async (req, res) => {
  try {
    const { gsearch } = req.body;
    const body = String("gsearch=" + gsearch);

    await axios
      .post(url, body, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => {
        res.status(500).json({ error: true, message: err.message });
      });
  } catch (err) {
    res.send(err.message);
  }
});

router.get("/", (req, res) => {
  res.status(201).json({
    message: "Welcome to Price Bond Checker API",
    documentation: "https://github.com/maopu2001/price_bond_checker_backend",
    Copyright: "M. Aktaruzzaman Opu, CSE 7th Batch, RMSTU",
  });
});

export default router;
