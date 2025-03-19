const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//create a database connection
mongoose.connect('mongodb+srv://esayasashenafi21:XUPY3nzt0mhchDli@cluster0.yiw3n.mongodb.net/'

)
.then(() => console.log('Database connected!'))
.catch((error) => console.log(error));


const app = express();
const PORT= process.env.PORT || 5000;

app.use(
    cors({
        origin: 'http://localhost:5173/',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders : [
            'Content-Type',
             'Authorization',
            'Cache-control',
            'Expires',
            'Pragma'],
            credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});