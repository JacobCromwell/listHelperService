const { DataTypes } = require('sequelize');
const sequelize = require('../../db/sequelizeDB');

const Users = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        required: true,
        allowNull: false,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lname: {
        type: DataTypes.STRING
    },
    fname: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password_expir: {
        type: DataTypes.DATE,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    create_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    update_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    last_login: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: true,
    createdAt: 'create_date',
    updatedAt: 'update_date'
});

Users.sync();

module.exports = Users;