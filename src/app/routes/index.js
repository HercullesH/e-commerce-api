import product from './product.route';
import category from './category.route';

export default (app) => {
	app.use('/api/products', product);
	app.use('/api/categories', category);
};
