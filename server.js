const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());


app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

app.post('/data', (req, res) => {
    res.json({ receivedData: req.body });
});


const PORT = process.env.PORT || 3000;  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
