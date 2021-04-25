import express from 'express';
import * as ProductController from '../controllers/product.controller';
import * as ProductValidator from '../validators/product.validator';

const router = express.Router();

router.post('/', ProductValidator.create(), ProductController.create);

router.put('/:id', ProductValidator.update(), ProductController.update);

router.delete('/:id', ProductValidator.destroy(), ProductController.destroy);

export default router;
