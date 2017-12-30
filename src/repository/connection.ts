import * as mysql from 'mysql';
export class Connection {
    static getConnection(): any {
        return mysql.createConnection({
            host: '',
            user: '',
            password: '',
            database: ''
        });
    }
}