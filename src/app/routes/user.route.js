import express from 'express';
import UserController from '../controllers/user.controller';
import UserValidator from '../validators/user.validator';

class UserRouter {
	constructor() {
		this.router = express.Router();
		this.userController = new UserController();
		this.userValidator = new UserValidator();
	}

	setup() {
		this.router.post('/login', this.userValidator.login(), this.userController.login);
		this.router.post('/logout', this.userController.logout);
		// this.router.post('/', this.userValidator.create(), this.userController.create);
		// this.router.put('/:id', this.userValidator.update(), this.userController.update);
		// this.router.delete('/:id', this.userValidator.destroy(), this.userController.destroy);

		return this.router;
	}
}

export default UserRouter;
