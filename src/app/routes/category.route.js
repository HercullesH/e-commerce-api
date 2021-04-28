import express from 'express';
import CategoryController from '../controllers/category.controller';
import CategoryValidator from '../validators/category.validator';

class CategoryRouter {
	constructor() {
		this.router = express.Router();
		this.categoryController = new CategoryController();
		this.categoryValidator = new CategoryValidator();
	}

	setup() {
		this.router.post('/', this.categoryValidator.create(), this.categoryController.create);
		this.router.put('/:id', this.categoryValidator.update(), this.categoryController.update);
		this.router.delete('/:id', this.categoryValidator.destroy(), this.categoryController.destroy);

		return this.router;
	}
}

export default CategoryRouter;
