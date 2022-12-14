module.exports = {
  dialect: "mysql",
  host: process.env.HOST,
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: 3306,
  define: {
    timestamps: true,
    underscored: true,
  },
};
