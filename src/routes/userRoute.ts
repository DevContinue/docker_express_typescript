import express from "express";

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).send("<h1>User</h1>");
});

export default router;