import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail.js";


const appointmentSchema= new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, "First name must contain at least 3 characters"]
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3, "Last name must contain at least 3 characters"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: isEmail,
            message: "Please provide a valid email"
        }
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v);
            },
            message: "Phone number must contain exactly 10 digits"
        }
    },
    nic: {
        type: String,
        required: true,
        minlength: [16, "NIC must contain exactly 16 characters"],
        maxlength: [16, "NIC must contain exactly 16 characters"]
    },
    dob: {
        type: Date,
        required: [true, "DOB is required!"]
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },
    appointment_date:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        required:true,
    },
    doctor:{
        firstName:{
            type:String,
            required:true,
        },
        lastName:{
            type:String,
            required:true,
        }
    },
    hasVisited:{
        type:Boolean,
        default:false,
    },
    doctorId:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref: 'User'
    },
    patientId:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref: 'User'
    },
    address:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["Pending", "Accepted", "Rejected"],
        default:"Pending",
    },
});

export const Appointment = mongoose.model("Appointment", appointmentSchema);
