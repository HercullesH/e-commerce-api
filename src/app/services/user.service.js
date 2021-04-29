import UserRepository from '../repositories/user.repository';
import ErrorMessage from '../utils/errorMessage';
import { hash } from 'bcrypt';
import { config } from 'dotenv';

config();

class UserService {
	constructor() {
		this.userRepository = new UserRepository();
	}

	async create(user) {
		// eslint-disable-next-line no-undef
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

}

export default UserService;
