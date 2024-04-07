require ('dotenv').config();

const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notfound = require('./middleware/404')

//middleware
app.use(express.json())
app.use(express.static('./public'))


//initialize port
const PORT= 3000 || process.env.PORT;


//routes
app.use('/api/v1/tasks',tasks)
app.use(notfound)



//Connect DB
connectDB();

//listing to port
app.listen(PORT,console.log(`Server chalu hai apka ${PORT}...`));