module.exports = {
  host: process.env.HOST,
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: 5432,
  ssl: true,
  dialectOptions: {
    ssl: true,
    rejectUnauthorized: false,
  },
  dialect: "postgres",
  define: {
    timestamps: true,
    underscored: true,
  },
};
