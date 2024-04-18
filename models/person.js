const { words, uniq } = require('lodash');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    },
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
});

PersonSchema.pre('save', async function(next){
    const person = this;

    // Hash the password only if has been modified (Or new)
    if(!Person.isModified('password'))  return next();

    try{
        // Hash Password Generation
        const salt = await bcrypt.genSalt(10);
        // hash password
        const hashedPassword = await bcrypt.hash(person.password, salt);

        // Override the plain password with the hashed one
        person.password = hashedPassword;
        next();
    }catch(err){
        return next(err);
    }
    
});

PersonSchema.methods.comparePassword = async function(candidatePassword){
    try{
        // Use bcrypt to compair the provided password with the hashed password
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    }catch(err){
        throw err;
    }
}

// Create Person Model
const Person = mongoose.model('Person', PersonSchema);
module.exports = Person;