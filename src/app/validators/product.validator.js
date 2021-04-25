import { body, param } from 'express-validator';

export const create = () => {
	return [
		body('name', 'Nome é inválido').exists(),
		body('price', 'Preço inválido').exists().bail().isFloat({ gt: 0.0 }),
		body('category_id', 'Categoria inválida').exists().bail().isInt({ gt: 0 })
	];
};

export const update = () => {
	return [
		body('name', 'Nome é inválido').exists(),
		body('price', 'Preço inválido').exists().bail().isFloat({ gt: 0.0 }),
		body('category_id', 'Categoria inválida').exists().bail().isInt({ gt: 0 }),
		param('id', 'id inválido').exists()
	];
};

export const destroy = () => {
	return [
		param('id', 'id inválido').exists()
	];
};
