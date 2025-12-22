import express from 'express';
import dotenv from "dotenv";
dotenv.config();
import cors from 'cors';
import Router from './routes/productRoutes.js';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({
    origin: 'http://localhost:5173',
}));
app.use(express.json());
app.use('/api', Router);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
