import express from 'express';
import CategoryController from '../controllers/category.controller';
import CategoryValidator from '../validators/category.validator';
import Authorizator from '../middlewares/authorizator';

class CategoryRouter {
	constructor() {
		this.router = express.Router();
		this.categoryController = new CategoryController();
		this.categoryValidator = new CategoryValidator();
	}

	setup() {
		this.router.post('/', Authorizator.verifyJWT, this.categoryValidator.create(), this.categoryController.create);
		this.router.put('/:id', Authorizator.verifyJWT, this.categoryValidator.update(), this.categoryController.update);
		this.router.delete('/:id', Authorizator.verifyJWT, this.categoryValidator.destroy(), this.categoryController.destroy);

		return this.router;
	}
}

export default CategoryRouter;
