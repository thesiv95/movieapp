// libs
import express from 'express';
import cors from 'cors';

// MySQL server configuration
import connection from './config.js';

// API
import {allData, addMovie, updateMovie, deleteMovie, updateUserRating, updateUserStatus} from './api/index.js';

// node.js web server initialization
let app = express();
app.use(cors());
 
// connection to mySQL database
connection.connect((err) => {
    if (err) throw err;
    console.log("DB connected");
});

// queries
app.get('/allData', allData);
app.post('/addMovie', addMovie);
app.post('/updateMovie', updateMovie);
app.post('/deleteMovie', deleteMovie);
app.post('/updateUserRating', updateUserRating);
app.post('/updateUserStatus', updateUserStatus);

// server start point
let port = process.env.PORT || 9000;
app.listen(port, () => console.log(`app was started on port ${port}`));