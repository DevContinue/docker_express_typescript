import "dotenv/config";
import express from "express";
import homeRoute from "./routes/homeRoute";
import userRoute from "./routes/userRoute";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", homeRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
})