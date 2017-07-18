module.exports = app => {
	const Users = app.db.models.Users;
console.log('entro nassa merda');
	app.route("/user")
		.all(app.auth.authenticate())
		.get((req, res) => {
			console.log('Inicio /users');
			Users.findById(req.user.id, {
				attributes: ["id", "name", "email"]
			})
			//.then(result => res.json(result))
			.then(function(result) {
				console.log('Achou usuario : ' + result);
				res.json(result);
			})
			.catch(error => {
				console.log("Erro Users Get " + error.message);
				res.status(412).json({msg: error.message});
			});
			console.log('errrroo');
		})
		.delete((req, res) => {
			Users.destroy({where: {id: req.user.id} })
			.then(result => res.sendStatus(204))
			.catch(error => {
				res.status(412).json({msg: error.message});
			});
		});
		app.post("/users", (req, res) => {
			Users.create(req.body)
				.then(result => res.json(result))
				.catch(error => {
					res.status(412).json({msg: error.message});
				});
		});
}