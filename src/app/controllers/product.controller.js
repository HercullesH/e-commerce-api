import { validationResult } from 'express-validator';
import createError from 'http-errors';
import * as ProductService from '../services/product.service';

export const listAll = (req, res, next) => {
	try {
		// const errors = validationResult(req);

		// if (!errors.isEmpty()) {
		// 	throw createError(422, { errors: errors.array() });
		// }

		res.json({ message: 'funcionando' });
	} catch (error) {
		return next(error);
	}
};

export const create = async (req, res, next) => {
	try {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			throw createError(422, { errors: errors.array() });
		}

		const response = await ProductService.create(req.body);

		res.json(response);
	} catch (error) {
		return next(error);
	}
};

export const update = async (req, res, next) => {
	try {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			throw createError(422, { errors: errors.array() });
		}

		const response = await ProductService.update(req.body, req.params.id);

		res.json(response);
	} catch (error) {
		return next(error);
	}
};

export const destroy = async (req, res, next) => {
	try {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			throw createError(422, { errors: errors.array() });
		}

		const response = await ProductService.destroy(req.params.id);

		res.json(response);
	} catch (error) {
		return next(error);
	}
};
