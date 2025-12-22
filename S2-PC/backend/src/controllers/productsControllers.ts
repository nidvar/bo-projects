import type { Request, Response } from 'express';
import { sql } from '../config/db.js';

export const getAllProducts = async (req: Request, res: Response) => {
    console.log('getting all products----------------')
    try {
        const results = await sql `SELECT * FROM products`;
        console.log(results);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const addProduct = async (req: Request, res: Response) => {
    console.log('adding a product----------------')
    try {

        console.log(req.body);

        // const result = await sql `INSERT INTO products (name, price) VALUES ('New Product', 9.99) RETURNING *`;
        res.status(201).json({ message: 'Product recieved from.' + req.body });
    } catch (error) {
        console.error('Error adding product:', error);
    }
}