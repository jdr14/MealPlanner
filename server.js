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

// Handle submission of a recipe
app.post('/api/add-recipe', (req, res) => {
    const { recipe, ingredients } = req.body;
    console.log('Received recipe:', recipe);
    console.log('Received ingredients:', ingredients); // This should be an array

    // Send a response back to the front end
    res.json({
        message: 'Recipe received successfully',
        receivedRecipe: recipe,
        receivedIngredients: ingredients
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
