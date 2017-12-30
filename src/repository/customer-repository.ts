import { Connection } from './connection';
import { Observable } from 'rxjs/Observable';
export class CustomerDAO {
    con: any;
    constructor() {
        this.con = Connection.getConnection();
    }
    getCustomerByName(name: string): Observable<string> {

        return new Observable<string>((observer) => {
            try {
                this.con.query('CALL get_customers(' + name + ')', function (err: any, result: any, fields: any) {
                    if (err) { // error
                        observer.error(err);
                    } else { // success
                        observer.next(result[0][0]['address']);
                        observer.complete();
                    }
                });
            } catch (e) { // exception
                observer.error(e);
                observer.complete();
            }
            return () => { // Close db connection on disposal
                this.con.end();
                this.con.destroy();
            };
        });
    }
}