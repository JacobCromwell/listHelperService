
const { Sequelize } = require('sequelize');

let sequelize = new Sequelize({
  dialect: 'postgres',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  options: {
    port: process.env.DB_PORT
  },
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  }
});


// Connect all the models/tables in the database to a db object, 
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.Allowed_Users = require('../api/models/allowed_users')(sequelize, Sequelize);
db.Helper_Lists = require('../api/models/helper_lists')(sequelize, Sequelize);
db.Items = require('../api/models/items')(sequelize, Sequelize);
db.User_Groups = require('../api/models/user_groups')(sequelize, Sequelize);
db.Users = require('../api/models/users')(sequelize, Sequelize);

//Relations
db.Allowed_Users.belongsTo(db.Helper_Lists);
db.Helper_Lists.hasMany(db.Allowed_Users);
db.Helper_Lists.hasMany(db.Items);
db.Items.belongsTo(db.Helper_Lists);
db.User_Groups.belongsTo(db.Users);
db.Users.hasMany(db.Helper_Lists);
db.Users.hasMany(db.User_Groups);

module.exports = {
    db, 
    sequelize
};

