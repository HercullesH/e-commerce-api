import { Product } from '../database/models/index';

class ProductRepository {
	create(product) {
		return Product.create(product);
	}

	update(product, filter) {
		return Product.update(product, { where: filter });
	}

	findByPk(id) {
		return Product.findByPk(id);
	}

	destroy(id) {
		return Product.destroy({ where: { id: id } });
	}
}

export default ProductRepository;
