const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let restaurants = [
    { id: 1, name: 'Pizza Place', items: [{ id: 1, name: 'Margherita', price: 10 }] },
    { id: 2, name: 'Burger Joint', items: [{ id: 1, name: 'Cheeseburger', price: 8 }] },
];

let orders = [];

// Get list of restaurants
app.get('/restaurants', (req, res) => {
    res.json(restaurants);
});

// Place an order
app.post('/order', (req, res) => {
    const { restaurantId, items } = req.body;
    const order = { id: orders.length + 1, restaurantId, items };
    orders.push(order);
    res.status(201).json(order);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
