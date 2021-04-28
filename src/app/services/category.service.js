import CategoryRepository from '../repositories/category.repository';

class CategoryService {
	constructor() {
		this.categoryRepository = new CategoryRepository();
	}

	async create(category) {
		return await this.categoryRepository.create(category);
	}

	async update(changes, filter) {
		const category = await this.categoryRepository.findByPk(filter);

		if (!category) {
			throw Error('categoria não existe');
		}

		return await this.categoryRepository.update(changes, { id: filter });
	}

	async destroy(filter) {
		const category = await this.categoryRepository.findByPk(filter);

		if (!category) {
			throw Error('categoria não existe');
		}

		return await this.categoryRepository.destroy(filter);
	}

}

export default CategoryService;
