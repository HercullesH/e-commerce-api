import CategoryService from '../services/category.service';
import BaseController from './base.controller';
class CategoryController extends BaseController {
	constructor() {
		super();

		this.categoryService = new CategoryService();
		this.listAll = this.listAll.bind(this);
		this.create = this.create.bind(this);
		this.update = this.update.bind(this);
		this.destroy = this.destroy.bind(this);

	}

	listAll(req, res, next) {
		try {
			// const errors = validationResult(req);

			// if (!errors.isEmpty()) {
			// 	throw createError(422, { errors: errors.array() });
			// }

			res.json({ message: 'funcionando' });
		} catch (error) {
			return next(error);
		}
	}

	async create(req, res, next) {
		try {
			this.verifyRequest(req);

			const response = await this.categoryService.create(req.body);

			res.json(response);
		} catch (error) {
			return next(error);
		}
	}

	async update(req, res, next) {
		try {
			this.verifyRequest(req);

			const response = await this.categoryService.update(req.body, req.params.id);

			res.json(response);
		} catch (error) {
			return next(error);
		}
	}

	async destroy(req, res, next) {
		try {
			this.verifyRequest(req);

			const response = await this.categoryService.destroy(req.params.id);

			res.json(response);
		} catch (error) {
			return next(error);
		}
	}

}

export default CategoryController;
