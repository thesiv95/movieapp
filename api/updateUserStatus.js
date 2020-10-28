import connection from '../config.js';

const updateUserStatus = (req, res) => {
    let query = `UPDATE movies SET user_likes=${parseInt(req.query.status)} WHERE id=${req.query.id}`;
    connection.query(query, (error) => {
        if (error) throw new Error(error);
        res.sendStatus(200);
    });
};

export default updateUserStatus;