const express = require('express');

const app = express();
const PORT = process.env.PORT || 3791;

app.get('/', (req, res) => res.send('API Running'));

app.listen(PORT, () => console.log(`One server to rule them all running on port ${PORT}`));
