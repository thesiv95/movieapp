import {escape} from 'mysql';
import connection from '../config.js';

const updateMovie = (req, res) => {
    let query = `UPDATE movies SET name=${escape(req.query.name)} WHERE id=${req.query.id}`;
    connection.query(query, (error) => {
        if (error) throw new Error(error);
        res.sendStatus(200);
    })
};

export default updateMovie;