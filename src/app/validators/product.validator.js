import { body, param } from 'express-validator';
import ErrorMessage from '../utils/errorMessage';

class ProductValidator {
	create() {
		return [
			body('name', ErrorMessage.validatorMessage('Nome')).exists(),
			body('price', ErrorMessage.validatorMessage('Preço')).exists().bail().isFloat({ gt: 0.0 }),
			body('category_id', ErrorMessage.validatorMessage('Categoria')).exists().bail().isInt({ gt: 0 })
		];
	}

	update() {
		return [
			body('name', ErrorMessage.validatorMessage('Nome')).exists(),
			body('price', ErrorMessage.validatorMessage('Preço')).exists().bail().isFloat({ gt: 0.0 }),
			body('category_id', ErrorMessage.validatorMessage('Categoria')).exists().bail().isInt({ gt: 0 }),
			param('id', ErrorMessage.validatorMessage('ID')).exists()
		];
	}

	destroy() {
		return [
			param('id',  ErrorMessage.validatorMessage('ID')).exists()
		];
	}
}

export default ProductValidator;
