const { DataTypes } = require('sequelize');
const sequelize = require('../../db/sequelizeDB');

/*
id serial PRIMARY KEY,
	list_id integer NOT NULL,
	url VARCHAR(500),
	img_url VARCHAR(500),
	purchased boolean,
	title VARCHAR(255),
	description VARCHAR(255),
	create_date TIMESTAMP NOT NULL,
    update_date TIMESTAMP NOT NULL,
	CONSTRAINT item_list_id_fkey FOREIGN KEY (list_id)
      REFERENCES helper_list (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
      */

module.exports = (sequelize, DataTypes) => {
    const Items = sequelize.define('items', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            required: true,
            allowNull: false,
            autoIncrement: true
        },
        helper_list_id: {
            type: DataTypes.INTEGER,
            required: true,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img_url: {
            type: DataTypes.STRING,
            allowNull: true
        },
        purchased: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
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
        tableName: 'items',
        timestamps: true,
        createdAt: 'create_date',
        updatedAt: 'update_date',
        underscored: true
    });

    Items.sync();
    return Items;
}

//module.exports = Items;