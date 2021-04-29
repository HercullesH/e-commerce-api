import ProductRepository from '../repositories/product.repository';
import ErrorMessage from '../utils/errorMessage';

class ProductService {
	constructor() {
		this.productRepository = new ProductRepository();
	}

	async create(product) {
		return await this.productRepository.create(product);
	}

	async update(changes, filter) {
		const product = await this.productRepository.findByPk(filter);

		if (!product) {
			throw Error(ErrorMessage.notExists('Produto'));
		}

		return await this.productRepository.update(changes, { id: filter });
	}

	async destroy(filter) {
		const product = await this.productRepository.findByPk(filter);

		if (!product) {
			throw Error(ErrorMessage.notExists('Produto'));
		}

		return await this.productRepository.destroy(filter);
	}

}

export default ProductService;
