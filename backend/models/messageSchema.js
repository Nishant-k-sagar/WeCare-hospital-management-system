import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail.js";

const messageSchema = new mongoose.Schema({
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
    message: {
        type: String,
        required: true,
        minlength: [10, "Message must contain at least 10 characters"]
    }
});

export const Message = mongoose.model("Message", messageSchema);
