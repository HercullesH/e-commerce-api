import { body, param } from 'express-validator';
import ErrorMessage from '../utils/errorMessage';

class UserValidator {
	create() {
		return [
			body('name', ErrorMessage.validatorMessage('Nome')).exists().bail().isString(),
			body('email', ErrorMessage.validatorMessage('Email')).exists().bail().isString(),
			body('password', ErrorMessage.validatorMessage('Senha')).exists().bail().isString()
		];
	}

	update() {
		return [
			body('name', ErrorMessage.validatorMessage('Nome')).exists().bail().isString(),
			body('email', ErrorMessage.validatorMessage('Email')).exists().bail().isString()
		];
	}

	destroy() {
		return [
			param('id', ErrorMessage.validatorMessage('ID')).exists()
		];
	}
}

export default UserValidator;
