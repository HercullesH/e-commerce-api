import CategoryRepository from '../repositories/category.repository';
import ErrorMessage from '../utils/errorMessage';

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
			throw Error(ErrorMessage.notExists('Categoria'));
		}

		return await this.categoryRepository.update(changes, { id: filter });
	}

	async destroy(filter) {
		const category = await this.categoryRepository.findByPk(filter);

		if (!category) {
			throw Error(ErrorMessage.notExists('Categoria'));
		}

		return await this.categoryRepository.destroy(filter);
	}

}

export default CategoryService;
