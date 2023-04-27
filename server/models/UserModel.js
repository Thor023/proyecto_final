import db from "../database/db";

import { DataTypes } from "sequelize";

const UserModel = db.define ('users', {
    user_name: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    adress: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
});

export default UserModel;