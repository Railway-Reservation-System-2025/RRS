import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./route/user.route.js";
import trainRoute from './route/train.route.js'
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

app.use(cors())

// Middleware to parse JSON bodies
app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connected to mongodb")
  } catch (error) {
    handleError(error);
  }
};

// Connect to MongoDB
connectDB();

// Defining routes

app.use('/api', trainRoute);
app.use('/api', userRoutes);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
