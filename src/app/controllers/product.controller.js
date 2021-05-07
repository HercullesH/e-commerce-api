import ProductService from '../services/product.service';
import BaseController from './base.controller';

class ProductController extends BaseController {
	constructor() {
		super();

		this.productService = new ProductService();
		this.paginate = this.paginate.bind(this);
		this.create = this.create.bind(this);
		this.update = this.update.bind(this);
		this.destroy = this.destroy.bind(this);
	}

	paginate(req, res, next) {
		try {
			this.verifyRequest(req);

			res.json({ message: 'funcionando' });
		} catch (error) {
			return next(error);
		}
	}

	async create(req, res, next) {
		try {
			this.verifyRequest(req);

			const response = await this.productService.create(req.body);

			res.json(response);
		} catch (error) {
			return next(error);
		}
	}

	async update(req, res, next) {
		try {
			this.verifyRequest(req);

			const response = await this.productService.update(req.body, req.params.id);

			res.json(response);
		} catch (error) {
			return next(error);
		}
	}

	async destroy(req, res, next) {
		try {
			this.verifyRequest(req);

			const response = await this.productService.destroy(req.params.id);

			res.json(response);
		} catch (error) {
			return next(error);
		}
	}

}

export default ProductController;
