// Write an Express.js route handler for POST /register that accepts name, email, and password in the request body and returns a success message.

const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// POST /register route
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // we can add  logic to store the user data in a database
    
    // Send success message
    res.status(201).json({ message: 'Registration successful', user: { name, email } });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
