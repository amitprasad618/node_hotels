const { words, uniq } = require('lodash');
const mongoose = require('mongoose');

// Define the Person Schema

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        require: true
    },
    mobile: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    salary: {
        type: Number,
        require: true
    }
});


// Create Person Model

const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;