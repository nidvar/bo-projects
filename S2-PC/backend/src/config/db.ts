// backend/src/config/db.ts
import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

export const sql = neon(process.env.DATABASE_URL!); // non-null assertion
