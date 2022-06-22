import express from 'express';
import path from 'path';
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/videos', express.static(path.join(__dirname, './videos')))
app.get('/', (_, res) => res.sendFile(path.join(__dirname, 'client/build/index.html')));

app.listen(4000, () => console.log("Server is connected ✅"));