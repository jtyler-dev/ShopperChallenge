// server/controllers/userController

var userController = function(db) {

    var getUser = function(req, res) {
        //get user to login
    };


    var validateNewUser = function(data) {
        // helper method used to validate a new user, returns true if valid
        // Would write full server side validation here, but for the purpose of
        // time I will just assume this is here for now.
        return {isValid: true};
    };

    var stringify = function(str) {
        //todo: add in html encoding of strings
        return str === null ? null : '\'' + str + '\'';
    };

    var getValueString = function (data) {
        var fName = stringify(data.first_name);
        var lName = stringify(data.last_name);
        var zip = stringify(data.zip_code);
        var phone = stringify(data.phone_number);
        var email = stringify(data.email);
        var phone_type = stringify(data.phone_type);

        return fName + ', ' +  lName +  ', ' +  zip + ', '  +  phone + ', ' +  email + ', ' + phone_type;
    };

    var createNewUser = function(req, res) {
        var data = req.body;
        //TODO: server side validation
        if(validateNewUser(data).isValid) {

            // basing this off of the provided database, there is no spots for this data
            // referral_code and agreement (agreement to a background check), so Im just going to
            // not save them to the db
            var valueStr = getValueString(data);

            db.serialize(() => {
                // check to see if email is already in the db
                db.all('SELECT email FROM applicants WHERE email = \'' + data.email + '\'', (err, rows) => {
                    if(err) {
                        // err handling
                        res.status(200).send({
                            isError: true,
                            error: err
                        });

                    } else if(rows.length === 0) {
                        // email is not in the db already
                        db.run('INSERT INTO applicants (id, first_name, last_name, region, phone, email, phone_type, created_at, updated_at) VALUES (NULL, ' + valueStr + ', datetime(), datetime())', (err, rows) => {
                            if(err) {
                                res.status(200).send({
                                    isError: true,
                                    message: "Error creating new user",
                                    error: err
                                });

                            } else {
                                res.status(201).send({message: 'user created'});
                            }

                        });
                    } else {
                        // email is already present, so return an error
                        res.status(200).send({
                            isError: true,
                            message: 'Error creating new user: email is already in use',
                            error: 'error'
                        });

                    }
                });
            });
        } else {
            // we have an error in the data
            res.status(200).send({
                isError: true,
                message: "Error in user data",
                error: err
            });
        }
    };

    return {
        getUser: getUser,
        createNewUser: createNewUser
    };
};

module.exports = userController;
