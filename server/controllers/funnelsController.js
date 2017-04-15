// server/controllers/funnelsController

var funnelsController = function(db) {

    //handler for GET: /funnels.json
    var getData = function (req, res) {
        // get start and end datas off of the queyString
        var startDate = req.query.start_date;
		var endDate = req.query.end_date;

        // if there is no start or end dates, return error
        if (!startDate || !endDate) {
			return res.json({
				error: 'Missing start or end dates'
			});
		}

        // Date format validation
        if(!validDateStr(startDate) || !validDateStr(endDate)) {
            return res.json({
				error: 'Start or end dates not formatted correctly : YYYY-MM-DD'
			});
        }

        // get Applicants between the dates
        db.serialize(() => {
            db.all('SELECT workflow_state, created_at FROM applicants where created_at >= date(\'' + startDate + '\') and created_at < date(\'' + endDate + '\', \'+1 day\') ORDER BY created_at ASC', (err, rows) => {
                if(err) {

                } else if(rows.length > 0) {
                    var retJson = {};

                    var bucketStart = null;
                    var bucketCutOff = null;
                    var lastAppDate = null;

                    var bData = {
                        applied: 0,
                        quiz_started: 0,
                        quiz_completed: 0,
                        onboarding_requested: 0,
                        onboarding_completed: 0,
                        hired: 0,
                        rejected: 0
                    };

                    for(var i = 0; i < rows.length; i++) {
                        var currApplicant = rows[i];

                        // convert this into a date we can use from a datetime string
                        var appDate = new Date(currApplicant['created_at'].replace(/-/g,"/"));

                        // we are just starting, so find the bucketCutOff
                        if(bucketCutOff === null) {
                            // start of this bucket is the first date
                            bucketStart = appDate;
                            // in this, a bucket goes from monday - sunday, so we
                            // need to get the next monday
                            bucketCutOff = new Date(currApplicant['created_at'].replace(/-/g,"/"));
                            bucketCutOff.setDate(bucketCutOff.getDate() + (1 + (7 - bucketCutOff.getDay()) % 7));
                            // set to midnight of cut off
                            bucketCutOff.setHours(0,0,0,0);
                        }

                        if(appDate < bucketCutOff) {
                            // we are still in this weeks bucket
                            bData[currApplicant['workflow_state']]++;

                        } else {
                            // we start a new bucket
                            var bStr = makeBucketStr(bucketStart, bucketCutOff);
                            // add our bucket string and data to the return json
                            retJson[bStr] = bData;

                            // reset the bData
                            bData = {
                               applied: 0,
                               quiz_started: 0,
                               quiz_completed: 0,
                               onboarding_requested: 0,
                               onboarding_completed: 0,
                               hired: 0,
                               rejected: 0
                           };

                            // set the start of the new bucket to the old cutoff
                            bucketStart = bucketCutOff;

                            // calculate the new bucket cutoff
                            bucketCutOff = new Date(bucketStart);
                            bucketCutOff.setDate(bucketStart.getDate() + (1 + (7 - bucketStart.getDay()) % 7));
                            // set to midnight of cut off
                            bucketCutOff.setHours(0,0,0,0);

                            // finally add our new data to the new bucket
                            bData[currApplicant['workflow_state']]++;
                        }

                        // keep track of the last app date for the final bucket
                        lastAppDate = appDate;
                    }

                    // final pass of the data
                    var bucket = makeBucketStr(bucketStart, lastAppDate, true);
                    // add our bucket string and data to the return json
                    retJson[bucket] = bData;

                    res.json(retJson);
                }
            });
        });
    };

    var makeBucketStr = function(startDate, endDate, isLast) {
        return startDate.getFullYear() + '-' + (startDate.getMonth() + 1) + '-' + startDate.getDate() + '-' +
               endDate.getFullYear() + '-' + (endDate.getMonth() + 1) + '-' + (isLast ? endDate.getDate() : endDate.getDate() -1)
    };

    var validDateStr = function(dateStr) {
        var ret = false;
        var comps = dateStr.split("-");

        if(comps.length === 3) {
            if(!isNaN( parseInt(comps[0])) && comps[0].length === 4 && comps[1].length == 2 && comps[2].length === 2) {
                if(!isNaN( parseInt(comps[1])) && parseInt(comps[1]) > 0 && parseInt(comps[1]) <= 12) {
                    if(!isNaN( parseInt(comps[2])) && parseInt(comps[2]) > 0 && parseInt(comps[2]) <= 31) {
                        ret = true;
                    }
                }
            }
        }

        return ret;
    };

    return {
        getData: getData
    };
};

module.exports = funnelsController;
