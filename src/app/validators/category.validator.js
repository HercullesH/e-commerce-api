import { body, param } from 'express-validator';
import ErrorMessage from '../utils/errorMessage';

class CategoryValidator {
	create() {
		return [
			body('name', ErrorMessage.validatorMessage('Nome')).exists()
		];
	}

	update() {
		return [
			body('name', ErrorMessage.validatorMessage('Nome')).exists(),
			param('id', ErrorMessage.validatorMessage('ID')).exists()
		];
	}

	destroy() {
		return [
			param('id', ErrorMessage.validatorMessage('ID')).exists()
		];
	}
}

export default CategoryValidator;
