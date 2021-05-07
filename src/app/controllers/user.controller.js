import BaseController from './base.controller';
import UserService from '../services/user.service';

class UserController extends BaseController {
	constructor() {
		super();

		this.userService = new UserService();
		this.listAll = this.listAll.bind(this);
		this.create = this.create.bind(this);
		this.update = this.update.bind(this);
		this.destroy = this.destroy.bind(this);
		this.login = this.login.bind(this);
	}

	listAll(req, res, next) {
		try {
			// const errors = validationResult(req);

			// if (!errors.isEmpty()) {
			// 	throw createError(422, { errors: errors.array() });
			// }

			res.json({ message: 'funcionando' });
		} catch (error) {
			return next(error);
		}
	}

	async create(req, res, next) {
		try {
			this.verifyRequest(req);

			const response = await this.userService.create(req.body);

			res.json(response);
		} catch (error) {
			return next(error);
		}
	}

	async update(req, res, next) {
		try {
			this.verifyRequest(req);

			const response = await this.userService.update(req.body, req.params.id);

			res.json(response);
		} catch (error) {
			return next(error);
		}
	}

	async destroy(req, res, next) {
		try {
			this.verifyRequest(req);

			const response = await this.userService.destroy(req.params.id);

			res.json(response);
		} catch (error) {
			return next(error);
		}
	}

	async login(req, res, next) {
		try {
			this.verifyRequest(req);

			const response = await this.userService.login(req.body);

			res.json(response);
		} catch (error) {
			return next(error);
		}
	}

	logout(req, res, next) {
		try {
			const response = this.userService.logout();

			res.json(response);
		} catch (error) {
			return next(error);
		}
	}

}

export default UserController;
