import ProductRouter from './product.route';
import CategoryRouter from './category.route';
import UserRouter from './user.route';

class Router {
	constructor() {
		this.productRouter =  new ProductRouter();
		this.categoryRouter =  new CategoryRouter();
		this.userRouter =  new UserRouter();
	}

	setup(app) {
		app.use('/api/products', this.productRouter.setup());
		app.use('/api/categories', this.categoryRouter.setup());
		app.use('/api/users', this.userRouter.setup());
	}
}

export default Router;
