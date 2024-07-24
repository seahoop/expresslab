//below is number 1
/*const express = require('express');
const app = express();

app.get('/EMPLOYEENETWORK', (req, res) => {
    res.send(`<h1>WELCOME TO HARBOR INDUSTRY TOP LEVEL CLEARENCE NETWORK!</h1>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
*/

/*
//below is number 2
const express = require('express');
const app = express();

function rollDice(max) {
    return Math.floor(Math.random() * (max + 1));
}

app.get('/roll/:number', (req, res) => {
    const number = req.params.number;

    if (isNaN(number)) {
        res.send('You must specify a number.');
    } else {
        const maxNumber = parseInt(number, 10);
        const rolledNumber = rollDice(maxNumber);
        res.send(`You rolled a ${rolledNumber}.`);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
*/


/*
//below is number 3 I WANT THAT ONE!
const express = require('express'); 
const app = express();
const port = 3000;


const collectibles = [
    {name: 'Terminator XI', level: 95},
    {name: 'Terminator X', level: 90},
    {name: 'Terminator XX', level: 85},
];


app.get('/collectibles/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);

    if(isNaN(index) || index < 0 || index >= collectibles.length){
        res.send(`Robot offline, update progress95%`);
    } else {
        const item = collectibles[index];
        res.send(`Robot online request sent to command?`);
    }

});


app.listen(port, () =>{
    console.log(`Robot is running on http://localhost:${port}`);

});

*/

const express = require('express');
const app = express();
const port = 3000;



const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) =>{
    let filteredShoes = shoes;
    //below the name of the subjects
    const {min_price, max_price, type} = req.query;

    //below is for min-price
    if(min_price){
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= parseFloat(min_price));
    }
    //below is for max_price
    if(max_price){
        filteredShoes = filteredShoes.filter(shoe =>shoe.price <= parseFloat(max_price));

    }
    if(type){
        filteredShoes = filteredShoes.filter(shoe => shoe.type ===type);
    }
    res.json(filteredShoes);
});



app.listen(port, () =>{
    console.log(`Robot is running on http://localhost:${port}`);
});



