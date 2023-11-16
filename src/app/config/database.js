require("dotenv/config"); // VARIAVEIS DE AMBIENTE
module.exports = {
	dialect: process.env.DATABASE_DIALECT,
	host: process.env.DATABASE_HOST,
	username: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_DB,
	define: {
		timestamps: true,
		undescored: true,
	}
};