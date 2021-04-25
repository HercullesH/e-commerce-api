import express from 'express';
import * as CategoryController from '../controllers/category.controller';
import * as CategoryValidator from '../validators/category.validator';

const router = express.Router();

router.post('/', CategoryValidator.create(), CategoryController.create);

router.put('/:id', CategoryValidator.update(), CategoryController.update);

router.delete('/:id', CategoryValidator.destroy(), CategoryController.destroy);

export default router;
