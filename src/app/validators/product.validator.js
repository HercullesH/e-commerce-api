import { body, param } from 'express-validator';

class ProductValidator {
	create() {
		return [
			body('name', 'Nome é inválido').exists(),
			body('price', 'Preço inválido').exists().bail().isFloat({ gt: 0.0 }),
			body('category_id', 'Produto inválido').exists().bail().isInt({ gt: 0 })
		];
	}

	update() {
		return [
			body('name', 'Nome é inválido').exists(),
			body('price', 'Preço inválido').exists().bail().isFloat({ gt: 0.0 }),
			body('category_id', 'Produto inválido').exists().bail().isInt({ gt: 0 }),
			param('id', 'id inválido').exists()
		];
	}

	destroy() {
		return [
			param('id', 'id inválido').exists()
		];
	}
}

export default ProductValidator;
