import { CustomerDAO } from '../repository/customer-repository';
import { Observable } from 'rxjs/Observable';
export class CustomerService {
    customerDAO: CustomerDAO;
    constructor() {
        this.customerDAO = new CustomerDAO();
    }
    getCustomerByName(name: string): Observable<string> {
        return this.customerDAO.getCustomerByName(name);
    }
}