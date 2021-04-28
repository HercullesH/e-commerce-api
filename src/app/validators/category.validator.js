import { body, param } from 'express-validator';

class CategoryValidator {
	create() {
		return [
			body('name', 'Nome inválido').exists()
		];
	}

	update() {
		return [
			body('name', 'Nome inválido').exists(),
			param('id', 'id inválido').exists()
		];
	}

	destroy() {
		return [
			param('id', 'id inválido').exists()
		];
	}
}

export default CategoryValidator;
