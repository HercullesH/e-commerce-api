const mountError = (error) => {
	if (error.errors) {
		return error.errors.map((error) => error.msg);
	}

	if (error.message) {
		return [error.message];
	}

	return ['Algum erro aconteceu, tente novamente mais tarde.'];
};

// eslint-disable-next-line no-unused-vars
const handleError = (error, req, res, next) => {
	const errors = mountError(error);

	res.status(error.status || 500);
	res.json(errors);
};

export default handleError;
