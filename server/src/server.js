import express from 'express';
import path from 'path';
import './db.js';

const app = express();
app.use("/uploads", express.static(path.join(process.cwd(), "/uploads")));

app.listen(4000, () => console.log("Server is connected ✅"));