import express from 'express';

import { addProduct, getAllProducts } from '../controllers/productsControllers.js';

const Router = express.Router();

Router.get('/all', getAllProducts);
Router.post('/add', addProduct);

export default Router;