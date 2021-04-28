import { validationResult } from 'express-validator';
import createError from 'http-errors';
import ProductService from '../services/product.service';

class ProductController {
	constructor() {
		this.productService = new ProductService();

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
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				throw createError(422, { errors: errors.array() });
			}

			const response = await this.productService.create(req.body);

			res.json(response);
		} catch (error) {
			return next(error);
		}
	}

	async update(req, res, next) {
		try {
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				throw createError(422, { errors: errors.array() });
			}

			const response = await this.productService.update(req.body, req.params.id);

			res.json(response);
		} catch (error) {
			return next(error);
		}
	}

	async destroy(req, res, next) {
		try {
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				throw createError(422, { errors: errors.array() });
			}

			const response = await this.productService.destroy(req.params.id);

			res.json(response);
		} catch (error) {
			return next(error);
		}
	}

}

export default ProductController;
