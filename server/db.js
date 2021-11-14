import {Sequelize} from "sequelize";
import dotenv from "dotenv"
dotenv.config();


const name = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;

export default new Sequelize(
    name,
    user,
    password,
    {
        dialect: 'postgres',
        host,
        port
    }
)