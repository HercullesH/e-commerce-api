import { Product } from '../database/models/index';
import Paginator from '../utils/paginator';
import { sequelize } from '../database/models/index';

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

	paginate(filter) {
		return Product.findAndCountAll({
			...Paginator.paginate(filter.page, filter.pageSize),
			where: { active: true },
			order: sequelize.literal('id DESC')
		});
	}
}

export default ProductRepository;
