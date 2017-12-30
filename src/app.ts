import * as express from 'express';
import * as bodyParser from 'body-parser';
import { CustomerController } from './controllers/customer-controller';

class App {
    public express: any;
    customerController: CustomerController;
    constructor() {
      this.express = express();
      this.express.use(bodyParser.json());
      this.express.use(bodyParser.urlencoded({ extended: true }));
      this.customerController = new CustomerController();
      this.mountRoutes();
    }

  private mountRoutes(): void {
    const router = express.Router();

    router.get('/getcustomer', this.customerController.getCustomerByName);
    this.express.use('/', router);
  }
}

export default new App().express;