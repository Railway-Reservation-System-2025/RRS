import mongoose from "mongoose";

const seatSchema = new mongoose.Schema({
  passengerId: {
      type: mongoose.Schema.Types.ObjectId, 
      auto: true, 
      required: true
  },
  passengerName: {
    type: String,
    required: true
  },
  seatNo: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});

const bookingDetailsSchema = new mongoose.Schema({
  trainNumber: {
    type: String,
    required: true
  },
  journeyDate: {
    type: Date,
    required: true
  },
  pnrNumber: {
    type: String,
    required: true
  },
  numberOfSeats: {
    type: Number,
    required: true
  },
  trainName: {
    type: String,
    required: true
  },
  seats: [seatSchema] 
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true 
  },
  email: { 
    type: String,
    required: true,
    unique: true
  },
  password:{
    type:String,
    requried: true,
  },
  
  bookingDetails: [bookingDetailsSchema] 
});

const User = mongoose.model("User", userSchema);

export default User;
