import express from 'express';
import path from 'path';
import cors from 'cors';
import './db.js';
import router from './router.js';

const app = express();
app.use("/uploads", express.static(path.join(process.cwd(), "/uploads")));
app.use(cors())
app.use('/', router)

app.listen(4000, () => console.log("Server is connected ✅"));