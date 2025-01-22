// IMPORT EXPRESS
import express from "express";
import {filepath} from "url";
import path from "path";

const __filename = fileURLtoPath(import.meta.url);
const __dirname = path.dirname(__filename);

// For output to the terminal.
console.log(`Hello ${process.env.NAME}`);

const app = express();
app.use(express.static(path.join(__dirname, "public")));

