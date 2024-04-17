const mongoose = require('mongoose');

const managementSchema = new mongoose.Schema({

    task: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    }
});

const management = mongoose.model('management', managementSchema);

module.exports = management;