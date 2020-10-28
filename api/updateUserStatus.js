const updateUserStatus = (req, res) => {
    let query = `UPDATE movies SET 'user_status'=${parseInt(req.query.user_status)} WHERE id=${req.params.id}`;
    connection.query(query, (error) => {
        if (error) throw new Error(error);
        res.sendStatus(200);
    });
};

export default updateUserStatus;