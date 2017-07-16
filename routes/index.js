module.exports = app => {
	/**
	* @api {get} / API Status
	* @apiGroup Status
	* @apiSuccess {String} status Mensagm de status da APi
	* @apiSuccessExample {json} Sucesso
	*  		HTTp/1.1 200 OK
	* 		{"status": "Ntask API"}
	*/
	app.get("/", (req, res) => {
		res.json({status: "NTask API"});
	});	
};

