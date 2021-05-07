import UserRepository from '../repositories/user.repository';
import ErrorMessage from '../utils/errorMessage';
import { hash, compare } from 'bcrypt';
import { config } from 'dotenv';
import { sign } from 'jsonwebtoken';

config();

class UserService {
	constructor() {
		this.userRepository = new UserRepository();
	}

	async create(user) {
		user.password = await hash(user.password, ~~process.env.SALT);

		return await this.userRepository.create(user);
	}

	async update(changes, filter) {
		const user = await this.userRepository.findByPk(filter);

		if (!user) {
			throw Error(ErrorMessage.notExists('Usuário'));
		}

		return await this.userRepository.update(changes, { id: filter });
	}

	async destroy(filter) {
		const user = await this.userRepository.findByPk(filter);

		if (!user) {
			throw Error(ErrorMessage.notExists('Usuário'));
		}

		return await this.userRepository.destroy(filter);
	}

	async login(user) {
		const userLoggedIn = await this.userRepository.login(user);

		if (!userLoggedIn || !await compare(user.password, userLoggedIn.password)) {
			throw Error(ErrorMessage.notExists('Usuário'));
		}

		const token = sign({ id: userLoggedIn.id }, process.env.SECRET, {});

		delete user.password;

		return {
			auth: true,
			user: userLoggedIn,
			token: token
		};
	}

	logout() {
		return {
			auth: false,
			token: null
		};
	}

}

export default UserService;
