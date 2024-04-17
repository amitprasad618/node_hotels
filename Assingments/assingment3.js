const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("Server is Running");
});

// Given a JSON data string: {"name": "Alice", "age": 25, "hobbies": ["reading",
// "painting"]}, explain how you would extract the value of the "age" key.

var jsonData = '{"name": "Alice", "age": 25, "hobbies": ["reading","painting"]}';

const value = JSON.parse(jsonData);

console.log("Value of Age: ", value.age);


// How would you convert the following object into a JSON data string? {"title": "Book", "pages": 200};

var jsonData2 = { "title": "Book", "pages": 200 };

const value2 = JSON.stringify(jsonData2);

console.log(value2);

app.get('/', (req, res) => {
    res.send("Hello World!!");
});

app.get('/weather', (req, res) => {
    const weatherData = {
        temperature: 25,
        conditions: 'Sunny',
        city: 'Los Angeles'
    };
    res.json(weatherData);
});