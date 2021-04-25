import { body, param } from 'express-validator';

export const create = () => {
	return [
		body('name', 'Nome é obrigatório').exists(),
		body('price', 'Preço inválido').exists().bail().isFloat({ gt: 0.0 })
	];
};

export const update = () => {
	return [
		body('name', 'Nome é obrigatório').exists(),
		body('price', 'Preço inválido').exists().bail().isFloat({ gt: 0.0 }),
		param('id', 'id inválido').exists()
	];
};

export const destroy = () => {
	return [
		param('id', 'id inválido').exists()
	];
};
