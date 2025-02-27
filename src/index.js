const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 9000;

//Middlewares
app.use(express.json());
app.use('/api', userRoutes);

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

//Mongodb connection
mongoose.connect(process.env.MONGODB_URI).then(()=> console.log("connected to mongodb atlas"))
.catch((error)=> console.error(error));

app.listen(port, ()=> console.log('Server listening on port', port));