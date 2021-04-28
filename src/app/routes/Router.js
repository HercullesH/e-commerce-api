import ProductRouter from './product.route';
import CategoryRouter from './category.route';

class Router {
	constructor() {
		this.productRouter =  new ProductRouter();
		this.categoryRouter =  new CategoryRouter();
	}

	setup(app) {
		app.use('/api/products', this.productRouter.setup());
		app.use('/api/categories', this.categoryRouter.setup());
	}
}

export default Router;
