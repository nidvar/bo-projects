import { sql } from '../config/db.js';
export const getAllProducts = async (req, res) => {
    console.log('getting all products----------------');
    try {
        const results = await sql `SELECT * FROM products`;
        res.status(200).json(results);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
export const addProduct = async (req, res) => {
    console.log('adding a product----------------');
    try {
        const result = await sql `
            INSERT INTO 
            products (name, price, image) 
            VALUES (${req.body.name}, ${req.body.price}, ${req.body.image}) 
            RETURNING *
        `;
        console.log(result);
        res.status(201).json({ message: 'Product recieved from.' + req.body.name });
    }
    catch (error) {
        console.error('Error adding product:', error);
    }
};
