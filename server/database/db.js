import { Sequelize } from "sequelize";

const db = new Sequelize('tienda', 'root', 'root', {
    host:'localhost',
    dialect:'mysql'
});

export default db;