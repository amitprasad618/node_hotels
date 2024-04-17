const express = require('express');
const router = express.Router();

const menuItem = require('.././models/menuItem.js');
const management = require('.././models/management.js');



router.get('/', async (req, res) => {

    try {
        const data = await menuItem.find();
        console.log("fetch menu Item data!!");
        res.status(200).json(data);
    } catch (err) {
        console.log("Can'nt get data from Database");
        res.status(500).json({ err: "Internal Server Error" });
    }
});

router.post('/', async (req, res) => {

    try {
        const data = req.body;
        const postdata = new menuItem(data);
        const saveData = await postdata.save();
        console.log("Post data save Sucessfully!!");
        res.status(200).json(saveData);
    } catch (err) {
        console.log("Got error while Posting data");
        res.status(500).json({ err: "Internal Server Error" });
    }
});


router.post('/management', async (req, res) => {
    try {
        const taskpost = new management(req.body);
        await taskpost.save();
        res.status(201).send(taskpost);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/management', async (req, res) => {
    try {
        const data = await management.find();
        console.log("Data fetch sucessfully of management");
        res.status(200).json(data);
    } catch (err) {
        console.log("Got error in fetching data of management");
        res.status(500).json({ err: "Internal server error" });
    }
});

router.get('/:taste', async (req,res)=>{

    try{
        const tasteType = req.params.taste;

        if(tasteType == 'sweet' || tasteType == 'sour' || tasteType == 'spice'){
            const data = await menuItem.find({taste: tasteType});
            console.log('data fetch');
            res.status(200).json(data);
        }
        else{
            res.status(404).json({error: 'Invalid Taste type'});
        }
    }catch(err){
        console.log("Can get the value of taste");
        res.status(500).json({err: "Internal server error"});
    }

});

router.get('/management/:priority', async(req,res)=>{

    try{
        const priorityType = req.params.priority;

        if(priorityType == 'low' || priorityType == 'medium' || priorityType == 'high'){
            const priorityData = await management.find({priority: priorityType});
            console.log("priority data fetch");
            res.status(200).json(priorityData);
        } else {
            res.status(400).json({ERROR: "Invalid priority"})
        }
    }catch(err){
        console.log("Can get the value of taste");
        res.status(500).json({err: "Internal server error"});
    }
});

// comment added for testing perpous
module.exports = router