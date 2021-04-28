import express from 'express';
import ProductController from '../controllers/product.controller';
import * as ProductValidator from '../validators/product.validator';

class ProductRouter {
	constructor() {
		this.router = express.Router();
		this.productController = new ProductController();
	}

	setup() {
		this.router.post('/', ProductValidator.create(), this.productController.create);
		this.router.put('/:id', ProductValidator.update(), this.productController.update);
		this.router.delete('/:id', ProductValidator.destroy(), this.productController.destroy);

		return this.router;
	}
}

export default ProductRouter;
