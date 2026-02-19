
import mongoose from 'mongoose';

// Create schema first
const messageSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
            maxlength: 1000,
            trim: true,
        },
    },
    {
        timestamps: true,  // gives createdAt and updatedAt
    }
);

// Create a model off the schema next
const Message = mongoose.model("Message", messageSchema);

export default Message;
