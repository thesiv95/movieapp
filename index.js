// libs
import path from "path";
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

// MySQL server configuration
import connection from './config.js';

// API
import {allData, addMovie, updateMovie, deleteMovie, updateUserRating, updateUserStatus} from './api/index.js';

// node.js web server initialization
const __dirname = path.resolve();
let app = express();
app.use(cors());
app.use(helmet());
app.use( express.static( __dirname + '/admin' ));
app.use( express.static( __dirname + '/public' ));
// connection to mySQL database
connection.connect((err) => {
    if (err) throw err;
    console.log("DB connected");
});

// HTML pages

app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "admin", "index.html"));
});

app.get("/public", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
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