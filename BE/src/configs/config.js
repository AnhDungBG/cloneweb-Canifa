import dotenv from 'dotenv';
dotenv.config();

export default {
    PORT: process.env.PORT || 8000,
    URL_DB: process.env.DB_URI,
    SERECT_KEY: process.env.SERECT_KEY,
    REFRESH_TOKEN_LIFE: process.env.REFRESH_TOKEN_LIFE,
    ACCESS_TOKEN_LIFE: process.env.ACCESS_TOKEN_LIFE
};