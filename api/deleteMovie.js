import connection from '../config.js';

const deleteMovie = (req, res) => {
    let query = `DELETE FROM movies WHERE id=${req.query.id}`;
    connection.query(query, (error) => {
        if (error) throw new Error(error);
        res.sendStatus(200);
    });
};

export default deleteMovie;