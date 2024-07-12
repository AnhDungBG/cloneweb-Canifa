import config from "../configs/config.js";
import mongoose from 'mongoose';

const initMongoDB = async () => {
    try {
        await mongoose.connect(config.URL_DB)
        console.log('Connect database successfully')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }

}
const initDatabase = async () => {
    await initMongoDB()
}

export default initDatabase