const updateMovie = (req, res) => {
    let id = req.query.id;
    let query = `UPDATE movies SET name=${req.query.name} WHERE id=${id}`;
    connection.query(query, (error) => {
        if (error) throw new Error(error);
        res.sendStatus(200);
    })
};

export default updateMovie;