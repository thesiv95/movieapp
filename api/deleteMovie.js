const deleteMovie = (req, res) => {
    let query = `DELETE FROM movies WHERE id=${req.params.id}`;
    connection.query(query, (error) => {
        if (error) throw new Error(error);
        res.sendStatus(200);
    });
};

export default deleteMovie;