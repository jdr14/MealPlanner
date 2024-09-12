const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/add-recipe', (req, res) => {
    const data = req.body;
    console.log('Received data:', data);

    // Send a response back to the front end
    res.json({
        message: 'Data received successfully',
        receivedData: data
    });
});

app.post('/api/add-ingredient', (req, res) => {
    const data = req.body;
    console.log('Received data:', data);

    // Send a response back to the front end
    res.json({
        message: 'Data received successfully',
        receivedData: data
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
