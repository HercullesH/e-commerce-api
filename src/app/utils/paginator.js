class Paginator {

	static paginate (req) {
		req.page = ~~req.page;
		req.pageSize = ~~req.pageSize;
		const offset = req.page === 1 ? 0 : (req.page - 1) * req.pageSize;
		const limit = req.pageSize;

		delete req.page;
		delete req.pageSize;

		return {
			offset,
			limit
		};
	}
}

export default Paginator;
