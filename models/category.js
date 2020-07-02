const mongoose = require("mongoose");

// Database model for categories associated with the items
const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            maxlength: 30,
            unique: true
        }
    },
);

module.exports = mongoose.model("Category", categorySchema);
