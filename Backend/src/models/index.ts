import DbConfig from "../config/db.config";
import { OperatorsAliases, Options, Sequelize } from "sequelize";
import User from "./user.model";
import Role from "./role.model";

const dbConfig = new DbConfig();

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT,
  pool: dbConfig.POOL,
});

class DB {
  public Sequelize;
  public sequelize: Sequelize;
  public user;
  public role;
  public ROLES: string[];

  constructor() {
    this.Sequelize = Sequelize;
    this.sequelize = sequelize;
    this.user = new User(this.sequelize, this.Sequelize);
    this.role = new Role(this.sequelize, this.Sequelize);

    this.role.role.belongsToMany(this.user.user, {
      through: "user_roles",
      foreignKey: "roleId",
      otherKey: "userId",
    });

    this.user.user.belongsToMany(this.role.role, {
      through: "user_roles",
      foreignKey: "userId",
      otherKey: "roleId",
    });

    this.ROLES = ["user", "admin"];
  }
}

export default DB;
