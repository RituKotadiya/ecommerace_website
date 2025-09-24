
const { connectToDB } = require('./db');
// Create basic node api get

const express = require('express'); // Import the Express module

const app = express(); // Create an Express application

const port = 9000; // Define the port to listen on

app.use(express.json());

// Define a basic GET route

app.get('/', (req, res) => {
    res.send('Hello, world!'); // Send a plain text response
});

// Connect to MongoDB before starting the server
connectToDB().then((database) => {
  db = database;
  // Start the server only after DB connection is successful
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
});

