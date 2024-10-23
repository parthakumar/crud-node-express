// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
// const cors = require('cors'); 
// const dbConfig = require('./config/database.config.js');
// const mongoose = require('mongoose');
// app.use(cors());
// mongoose.Promise = global.Promise;
// mongoose.connect(dbConfig.url, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log("Databse Connected Successfully!!");    
// }).catch(err => {
//     console.log('Could not connect to the database', err);
//     process.exit();
// });
// app.get('/', (req, res) => {
//     res.json({"message": "Hello Crud Node Express"});
// });
// app.listen(3000, () => {
//     console.log("Server is listening on port 3000");
// });
// const UserRoute = require('./app/routes/user.js')
// app.use('/',UserRoute)

const express = require('express');
const bodyParser = require('body-parser');
//const cors = require('cors'); // Import CORS
const mongoose = require('mongoose');
const dbConfig = require('./config/database.config.js');
const UserRoute = require('./app/routes/user.js');

const app = express();

const cors = require('cors');
// CORS configuration (optional, can be adjusted as per requirements)
const corsOptions = {
    origin: '*', 
    optionsSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // Enable credentials if needed
};
app.use(cors(corsOptions));
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB connection
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

// Basic route
app.get('/', (req, res) => {
    res.json({"message": "Hello Crud Node Express"});
});

// User routes
app.use('/', UserRoute);

// Start the server
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
