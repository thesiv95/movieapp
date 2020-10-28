import connection from '../config.js';

const updateUserRating = (req, res) => {
    let query = `UPDATE movies SET rating_user=rating_user+1 WHERE id=${req.query.id}`;
    connection.query(query, (error) => {
        if (error) throw new Error(error);
        res.sendStatus(200);
    });
};

export default updateUserRating;