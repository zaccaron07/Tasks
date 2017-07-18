import passport from "passport";
import {Strategy} from "passport-jwt";
import {ExtractJwt} from "passport-jwt";

module.exports = app => {
	const Users = app.db.models.Users;
	const cfg = app.libs.config;
	const opts = {};
	opts.secretOrKey = cfg.jwtSecret;
	opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
	const strategy = new Strategy(opts,
		(payload, done) => {
			Users.findById(payload.id)
				.then(user => {
					if(user) {
						return done(null, {
							id: user.id,
							email: user.email
						});
					}
					console.log("Erro nao achou usuario");
					return done(null, false);
				})
				.catch(error => done(error, null));
		});
	passport.use(strategy);
	return {
		initialize: () => {
			return passport.initialize();
		},
		authenticate: () => {
			return passport.authenticate("jwt", cfg.jwtSession);
		}
	};

}