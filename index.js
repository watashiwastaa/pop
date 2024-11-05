const express = require('express');
const path = require('path');
const cors = require('cors'); // Import the cors middleware
const app = express();

// Enable CORS for https://onsentoyoga.life
app.use(cors({
    origin: 'https://onsentoyoga.life'
}));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
