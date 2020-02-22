const { DataTypes } = require('sequelize');
const sequelize = require('../../db/sequelizeDB');

/*
id serial PRIMARY KEY,
	user_id integer NOT NULL,
	private boolean NOT NULL,
	list_type VARCHAR(25),
	list_name VARCHAR(255),
	create_date TIMESTAMP NOT NULL,
    update_date TIMESTAMP NOT NULL,
	CONSTRAINT helper_list_id_fkey FOREIGN KEY (user_id)
      REFERENCES users (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
      */

const Helper_Lists = sequelize.define('helper_lists', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        required: true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        required: true,
        allowNull: false
    },
    list_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    list_name: {
        type: DataTypes.STRING,
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
}, {
    tableName: 'helper_lists',
    timestamps: true,
    createdAt: 'create_date',
    updatedAt: 'update_date'
});

Helper_Lists.sync();

module.exports = Helper_Lists;