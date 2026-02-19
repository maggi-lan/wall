
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();  // load environment variables

// Connect to the database asynchronously
export default async function connectDB() {
    try {
        // Fetch the database URI from environment variables
        const MONGO_URI = process.env.MONGO_URI;

        // Connect to the database
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected successfully");
    }

    catch (error) {
        console.log(`Error connecting to MongoDB: ${error}`);
        process.exit(1);
    }
}
