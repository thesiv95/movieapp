const updateUserLikes = (req, res) => {
    let query = `UPDATE movies SET 'user_likes'='user_likes'+1 WHERE id=${req.params.id}`;
    connection.query(query, (error) => {
        if (error) throw new Error(error);
        res.sendStatus(200);
    });
};

export default updateUserLikes;