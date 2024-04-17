const express = require('express');
const router = express.Router();

const Person = require('.././models/person.js');

router.post('/', async (req, res) => {

    // const data = req.body; // Assuming the req body contains the person data

    // // Create new Person doc using mongose model
    // const newPerson = new Person(data);

    //Save the new Person data to database
    // newPerson.save((error,savedPerson)=>{     //MongooseError: Model.prototype.save() no longer accepts a callback
    //     if(error){
    //         console.log("ERROR saving Person Data: ", error);
    //         res.status(500).json({error: 'Internal server error'});
    //     }
    //     else{
    //         console.log('Data save Successfully');
    //         res.status(200).json(savedPerson);
    //     }
    // })


    try {
        const data = req.body;

        const newPerson = new Person(data);

        const savedPerson = await newPerson.save();
        console.log("New Person Data save successfully!");
        res.status(200).json(savedPerson);

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log("Person Data fetch successfully!");
        res.status(200).json(data);
    }
    catch (err) {
        console.log("Can'nt get data from Database");
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/:workType', async (req, res) => {
    try {
        const workTypedata = req.params.workType;
        if (workTypedata == 'chef' || workTypedata == 'waiter' || workTypedata == 'manager') {
            const response = await Person.find({ work: workTypedata });
            console.log("Data fetched successfully");
            res.status(200).json(response);
        } else {
            console.log("Can't find data in database");
            res.status(400).json({ error: "Work type not found in database" });
        }
    } catch (err) {
        console.error("Error fetching data from database:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


module.exports = router;