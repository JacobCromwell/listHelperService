CREATE TABLE users(
   id serial PRIMARY KEY,
   username VARCHAR (50) UNIQUE NOT NULL,
   lname VARCHAR (50),
   fname VARCHAR (50),
   password VARCHAR (355) NOT NULL,
   password_expir TIMESTAMP NOT NULL, 
   email VARCHAR (355) UNIQUE NOT NULL,
   active boolean,
   create_date TIMESTAMP NOT NULL,
   update_date TIMESTAMP NOT NULL,
   last_login TIMESTAMP
);