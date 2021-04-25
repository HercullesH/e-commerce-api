import { body, param } from 'express-validator';

export const create = () => {
	return [
		body('name', 'Nome inválido').exists()
	];
};

export const update = () => {
	return [
		body('name', 'Nome inválido').exists(),
		param('id', 'id inválido').exists()
	];
};

export const destroy = () => {
	return [
		param('id', 'id inválido').exists()
	];
};
