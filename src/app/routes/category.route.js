import express from 'express';
import CategoryController from '../controllers/category.controller';
import * as CategoryValidator from '../validators/category.validator';

class CategoryRouter {
	constructor() {
		this.router = express.Router();
		this.categoryController = new CategoryController();
	}

	setup() {
		this.router.post('/', CategoryValidator.create(), this.categoryController.create);
		this.router.put('/:id', CategoryValidator.update(), this.categoryController.update);
		this.router.delete('/:id', CategoryValidator.destroy(), this.categoryController.destroy);

		return this.router;
	}
}

export default CategoryRouter;
