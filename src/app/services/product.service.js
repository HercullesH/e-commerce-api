import * as ProductRepository from '../repositories/product.repository';
export const create = async (product) => {
	return await ProductRepository.create(product);
};

export const update = async (changes, filter) => {
	const product = await ProductRepository.findByPk(filter);

	if (!product) {
		throw Error('produto não existe');
	}

	return await ProductRepository.update(changes, { id: filter });
};

export const destroy = async (filter) => {
	const product = await ProductRepository.findByPk(filter);

	if (!product) {
		throw Error('produto não existe');
	}

	return await ProductRepository.destroy(filter);
};
