# ShopperChallenge
Shopper Coding Challenge

# Requirements
- Nodejs


# Setup
- npm install
- change the serverConfig.json file to be the way you want it
- start up the server (node ./sever/server.js)
- start the app (npm start)


# Config Options
config options are available in the server folder in the file called serverConfig.json.

- 'dbLocation' - Where the app tries to connect to the db. defaults to "../db/database.sqlite"
- 'port' - change what port the app is run on: Default is 8080  
- 'isDemo' - built in functionality to later expand this into a production app. leave this true
```
{
    "isDemo" : true,
    "port" : 8080,
    "dbLocation" : "../db/database.sqlite"
}
```

# Using the API
## GET /api/funnels.json?start_date=<>&end_date=<>
returns stats for the applicants between the given dates. Assumes that the start_date and end_date strings
are in the 'YYYY-MM-DD' format. Ive made a slight modification to the return value from the spec.
My version of the return will give the bucket start from that date until Sunday if the first applicant is
in the middle of the week. As well, if the last applicant ends before that Sunday, the last bucket will show monday
until that date. I changed it to be this way becasue I feel that it makes a more accurate view of the

# Notes
- The 2 warnings in the console are from bootstrap-react which has not updated their package to the new react standards yet

# Credits
 - background img from https://pixabay.com/en/supermarket-stalls-coolers-market-949913/
