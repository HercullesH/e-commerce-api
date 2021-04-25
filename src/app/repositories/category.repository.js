
import { Category } from '../database/models/index';

export const create = (category) => Category.create(category);

export const update = (category, filter) => {
	return Category.update(category, { where: filter });
};

export const findByPk = (id) => Category.findByPk(id);

export const destroy = (id) => Category.destroy({ where: { id: id } });
