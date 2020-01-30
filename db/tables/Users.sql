CREATE TABLE Users(
   id serial PRIMARY KEY,
   username VARCHAR (50) UNIQUE NOT NULL,
   lname VARCHAR (50),
   fname VARCHAR (50),
   password VARCHAR (355) NOT NULL,
   email VARCHAR (355) UNIQUE NOT NULL,
   create_date TIMESTAMP NOT NULL,
   update_date TIMESTAMP NOT NULL,
   last_login TIMESTAMP
);