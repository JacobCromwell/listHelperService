# listHelperService

This service will interact with the listHelperDB in order to properly store user list information.

# Running the service

Currently the service is run through the index (which also handles routing)

`nodemon ./api/index.js`

# Big TODO list
* Error Handling
* More secure CORS
* Add initial logic for DB tables
    * item
    * users
    * list
    * allowedUsers
* Tests
* validations
* Logging
* Auditing
* Health checks
* performance metrics (attempt to use pre-existing AWS metrics)