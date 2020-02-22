const { DataTypes } = require('sequelize');
const sequelize = require('../../db/sequelizeDB');

/*
list_id integer NOT NULL,
	user_id integer NOT NULL,
	accepted boolean NOT NULL,
	PRIMARY KEY (list_id, user_id),
	CONSTRAINT allowed_users_user_id_fkey FOREIGN KEY (user_id)
      REFERENCES users (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT allowed_users_list_id_fkey FOREIGN KEY (list_id)
      REFERENCES helper_list (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
      */

const Allowed_Users = sequelize.define('allowed_users', {
    list_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        required: true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        required: true,
        primaryKey: true,
        allowNull: false
    },
    accepted: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},
 {
    tableName: 'allowed_users',
    timestamps: false,
    associations: true,
    indexes: [
        {
            unique: [user_id]
        }
    ]
});

Allowed_Users.sync();

module.exports = Allowed_Users;