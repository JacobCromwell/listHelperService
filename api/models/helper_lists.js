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

module.exports = (sequelize, DataTypes) => {
    const Helper_Lists = sequelize.define('helper_lists', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            required: true,
            allowNull: false,
            autoIncrement: true
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
            required: true,
            allowNull: false,
            validate: { len: [1, 100] }
        },
        private: {
            type: DataTypes.BOOLEAN,
            required: true,
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
        underscored: true,
        timestamps: true,
        createdAt: 'create_date',
        updatedAt: 'update_date'
    });

    Helper_Lists.sync();
    return Helper_Lists;
}

//module.exports = Helper_Lists;