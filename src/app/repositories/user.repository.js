import { User } from '../database/models/index';

class UserRepository {
	create(product) {
		return User.create(product);
	}

	update(product, filter) {
		return User.update(product, { where: filter });
	}

	findByPk(id) {
		return User.findByPk(id);
	}

	destroy(id) {
		return User.destroy({ where: { id: id } });
	}
}

export default UserRepository;
