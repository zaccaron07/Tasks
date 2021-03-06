import jwt from "jwt-simple";

module.exports = app => {
	const cfg = app.libs.config;
	const Users = app.db.models.Users;
	app.post("/token", (req, res) => {
		if(req.body.email && req.body.password) {
			const email = req.body.email;
			const password = req.body.password;
			console.log("Entrou; Email : " + email + " Senha : " + password);
			Users.findOne({where: {email: email}})
				.then(user => {
					console.log("achou usuario token")
					if(Users.isPassword(user.password, password)) {
						const payload = {id: user.id};
						res.json({
							token: jwt.encode(payload, cfg.jwtSecret)
						});
					} else {
						res.sendStatus(401);
					}
				})
				.catch(function(error) {
					console.log("Erro : "+error);
					res.sendStatus((401));
				})
		} else  {
			res.sendStatus(401);
		}
	});
};