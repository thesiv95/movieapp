const allData = (req, res) => {
    let query = 'SELECT * from movies';
    connection.query(query, (error, result) => {
        if (error) throw new Error(error);
        res.send(result);
    })
};

export default allData;