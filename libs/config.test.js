module.exports = {
	database: "ntask",
	username: "postgres",
	password: "senhaDoBanco",
	params: {
		dialect: "postgres",
		logging: false
	},
	jwtSecret: "Nta$k-API",
	jwtSession: {session: false}
};