const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;
//app.use(cors());
const blogsData = JSON.parse(fs.readFileSync('db.json', 'utf8'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.get('/blogs', (req, res) => {
    console.log(blogsData);
    res.json(blogsData);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});