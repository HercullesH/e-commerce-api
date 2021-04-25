import * as CategoryRepository from '../repositories/category.repository';
export const create = async (category) => {
	return await CategoryRepository.create(category);
};

export const update = async (changes, filter) => {
	const category = await CategoryRepository.findByPk(filter);

	if (!category) {
		throw Error('categoria não existe');
	}

	return await CategoryRepository.update(changes, { id: filter });
};

export const destroy = async (filter) => {
	const category = await CategoryRepository.findByPk(filter);

	if (!category) {
		throw Error('categoria não existe');
	}

	return await CategoryRepository.destroy(filter);
};
