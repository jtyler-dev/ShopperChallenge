// server/controllers/funnelsController

var funnelsController = function() {

    //handler for GET: /funnels.json
    var getData = function (req, res) {
        // get start and end datas off of the queyString
        var startDate = req.query.startDate;
		var endDate = req.query.endDate;

        // if there is no start or end dates, return error
        if (!startDate || !endDate) {
			return res.json({
				error: 'Missing start or end dates'
			});
		}

        // Date format validation

        // get Applicants between the dates

    };

    return {
        getData: getData
    };
};

module.exports = funnelsController;
