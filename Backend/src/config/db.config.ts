import { Dialect } from "sequelize/types";
import "dotenv/config";

const user: string = process.env.DB_USER;
const password: string = process.env.DB_PASSWORD;
const DOCKER_DB_HOSTNAME: string = "172.17.0.1";
const hostname: string =
  process.env.DEV_MODE == "docker"
    ? DOCKER_DB_HOSTNAME
    : process.env.DB_HOSTNAME;

const port: string = process.env.DB_PORT;
const dbName: string = process.env.DB_NAME;

class DbConfig {
  public HOST: string;
  public USER: string;
  public PASSWORD: string;
  public DB: string;
  public DIALECT: Dialect;
  public POOL: { max: number; min: number; acquire: number; idle: number };

  constructor() {
    console.log("hostname", hostname);
    this.HOST = hostname;
    this.USER = user;
    this.PASSWORD = password;
    this.DB = dbName;
    this.DIALECT = "postgres";
    this.POOL = {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    };
  }
}

export default DbConfig;
