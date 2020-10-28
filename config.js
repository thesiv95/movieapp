import {createConnection} from 'mysql';

let connection = createConnection({
    host: "localhost",
    user: "root",
    password: "0987",
    database: "movies",
    multipleStatements: true
});

export default connection;