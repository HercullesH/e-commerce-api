import { validationResult } from 'express-validator';
import createError from 'http-errors';
import Paginator from '../utils/paginator';

class BaseController {
	verifyRequest(req) {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			throw createError(422, { errors: errors.array() });
		}
	}

	paginate(req) {
		return Paginator.paginate(req);
	}
}

export default BaseController;
