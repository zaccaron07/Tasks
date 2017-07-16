import logger from "./logger.js";

module.exports = {
	database: "ntask",
	username: "postgres",
	password: "senhaDoBanco",
	params: {
		dialect: "postgres",
		logging: (sql) => {
			logger.info('Novo comando : ' + new Date() + sql);
		}
	},
	jwtSecret: "Nta$k-API",
	jwtSession: {session: false}
};