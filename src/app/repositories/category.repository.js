import { Category } from '../database/models/index';
class CategoryRepository {
	create(category) {
		return Category.create(category);
	}

	update(category, filter) {
		return Category.update(category, { where: filter });
	}

	findByPk(id) {
		return Category.findByPk(id);
	}

	destroy(id) {
		return Category.destroy({ where: { id: id } });
	}
}

export default CategoryRepository;
