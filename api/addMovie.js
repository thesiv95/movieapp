import { escape } from 'mysql';

const addMovie = (req, res) => {
    let currentDate = new Date().toISOString().slice(0,19).replace('T', ' ');
    console.log(currentDate);
    let imdbUrlCode = req.query.imdb_url.slice(27,36);
    let query = `INSERT INTO movies (name, imdb_url, rating_admin, rating_user, user_likes, timestamp) VALUES (
        ${escape(req.query.name)},
        ${escape(imdbUrlCode)},
        ${escape(parseInt(req.query.rating_admin))},
        0,
        0,
        ${escape(currentDate)}
    )`;
    connection.query(query, (error) => {
        if (error) throw new Error(error);
        res.sendStatus(200);
    })    
};

export default addMovie;