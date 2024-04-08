const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./src/routes/GoalRoutes'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});