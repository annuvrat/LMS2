const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json()); // for parsing application/json

// Route to test the server
app.get('/', async (req, res) => {
    console.log('Hello there');
    res.send('Hello from Express!');
});

// Catch-all 404 handler for unknown routes
app.use((req, res, next) => {
    res.status(404).send('Sorry, that route does not exist.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
