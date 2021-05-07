import { verify } from 'jsonwebtoken';
import { config } from 'dotenv';

config();

class Authorizator {
	static verifyJWT(req, res, next) {

		const token = req.headers['x-access-token'];

		if (!token) return res.status(401).json(['Usuário não autorizado.']);

		verify(token, process.env.SECRET, (err, decoded) => {
			if (err) return res.status(401).json(['Usuário não autorizado.']);

			req.user_id = decoded.id;
			next();
		});
	}
}

export default Authorizator;
