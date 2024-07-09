import express from 'express';
import cors from 'cors';
import config from './configs/config.js'
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello")
})
app.listen(config.PORT || 8000, () => {
    console.log(`Server is running on port: ${config.PORT || 8000}`)
})