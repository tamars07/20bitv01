const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles"
});
db.user.belongsToMany(db.role, {
  through: "user_roles"
});

db.monan = require("../models/monan.model.js")(sequelize, Sequelize);
db.chinhanh = require("../models/chinhanh.model.js")(sequelize, Sequelize);

db.chinhanh.belongsToMany(db.monan, {
  through: "monan_chinhanhs"
});
db.monan.belongsToMany(db.chinhanh, {
  through: "monan_chinhanhs"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
