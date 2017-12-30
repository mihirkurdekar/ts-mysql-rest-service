import { Request, Response, NextFunction } from 'express';
import { CustomerService } from '../services/customer-service';
import * as url from 'url';
export class CustomerController {
    constructor() {
    }
    getCustomerByName(req: Request, res: Response, next: NextFunction): void {
        const parsedUrl = url.parse(req.url, true);
        const name: string = (parsedUrl.query['name'] != undefined) ? parsedUrl.query['name'] : '';
        const customer = new CustomerService();
        console.log(name);
        const observer = customer.getCustomerByName(name).subscribe(
            (address) => { // success
                res.json({'address': address});
            },
            (error) => { // error
                // 500-> internal server error
                console.log(error);
                res.status(500).send({'error': 'Some error ocured'});
            },
            () => { // complete
                console.log('completed');
                observer.unsubscribe();
            }
        );
    }
}