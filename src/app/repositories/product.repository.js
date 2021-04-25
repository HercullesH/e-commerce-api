
import { Product } from '../database/models/index';

export const create = (product) => Product.create(product);

export const update = (product, filter) => {
	return Product.update(product, { where: filter });
};

export const findByPk = (id) => Product.findByPk(id);

export const destroy = (id) => Product.destroy({ where: { id: id } });
