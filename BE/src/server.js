import express, { Router } from 'express';
import cors from 'cors';
import config from './configs/config.js'
import router from './routes/index.js';
import initDatabase from './models/database.js'
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);
(async () => {
    try {
        await initDatabase();
        app.listen(config.PORT || 8000, () => {
            console.log(`Server is running on port: ${config.PORT || 8000}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
    }
})()
app.get("/", (req, res) => {
    res.send("hello")

})
