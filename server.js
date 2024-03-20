import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 5000; // Default to 5000 if PORT is not defined in .env

app.use(bodyParser.json()); // Parse JSON bodies

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
