# listHelperService

This service will interact with the listHelperDB in order to properly store user list information.

# Running the service

Currently the service is run through the index (which also handles routing)

`nodemon ./api/index.js`

# Big TODO list
* setup sequelize
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
* users
    * password expiration date
    * last active
    * change email address sends a message to both email addresses to protect against attackers changing emails
* items
    * only list owner can delete an item
    * any allowedUser can update an item's purchased flag