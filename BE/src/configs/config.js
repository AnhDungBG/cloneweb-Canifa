import dotenv from 'dotenv';
dotenv.config();

export default {
    PORT: process.env.PORT || 8000,
    URL_DB: process.env.DB_URI,
    SERECT_KEY: process.env.SERECT_KEY
};