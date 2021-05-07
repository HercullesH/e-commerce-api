import express from 'express';
import ProductController from '../controllers/product.controller';
import ProductValidator from '../validators/product.validator';
import Authorizator from '../middlewares/authorizator';

class ProductRouter {
	constructor() {
		this.router = express.Router();
		this.productController = new ProductController();
		this.productValidator = new ProductValidator();
	}

	setup() {
		this.router.post('/', Authorizator.verifyJWT, this.productValidator.create(), this.productController.create);
		this.router.put('/:id', Authorizator.verifyJWT, this.productValidator.update(), this.productController.update);
		this.router.delete('/:id', Authorizator.verifyJWT, this.productValidator.destroy(), this.productController.destroy);

		return this.router;
	}
}

export default ProductRouter;
