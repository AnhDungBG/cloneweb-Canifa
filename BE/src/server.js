import express, { Router } from 'express';
import cors from 'cors';
import config from './configs/config.js'
import router from './routes/index.js';
import initDatabase from './models/database.js'
import auth from './middleWares/auth.js'
const app = express();
app.use(cors());
app.use(express.json());
app.all("*", auth)
app.use('/api', router);

app.use((req, res, next) => {
    const error = new Error("Not found okok");
    error.status = 404;
    next(error);
});
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: {
            message: err.message,
        },
    });
});

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
