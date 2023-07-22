const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors(({
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type', 'auth-token'],
  })));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 
