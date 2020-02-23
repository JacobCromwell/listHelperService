const { DataTypes } = require('sequelize');
const sequelize = require('../../db/sequelizeDB');

/*
id serial PRIMARY KEY,
	user_id integer NOT NULL,
	member_id integer NOT NULL,
	accepted boolean,
	CONSTRAINT user_group_user_id_fkey FOREIGN KEY (user_id)
      REFERENCES users (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT user_group_member_id_fkey FOREIGN KEY (member_id)
      REFERENCES users (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
      */

const User_Groups = sequelize.define('user_groups', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        required: true,
        allowNull: false
    },
    member_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    accepted: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: 'user_groups',
    timestamps: false,
    underscored: true
});

User_Groups.sync();

module.exports = User_Groups;