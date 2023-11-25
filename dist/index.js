"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.status(200).send("<h1>Root</h1>");
});
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
