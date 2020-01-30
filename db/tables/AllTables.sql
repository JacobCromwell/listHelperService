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

CREATE TABLE helper_list
(
	id serial PRIMARY KEY,
	user_id integer NOT NULL,
	private boolean NOT NULL,
	list_type VARCHAR(25),
	create_date TIMESTAMP NOT NULL,
    update_date TIMESTAMP NOT NULL,
	CONSTRAINT helper_list_id_fkey FOREIGN KEY (user_id)
      REFERENCES users (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE allowed_users
(
	list_id integer NOT NULL,
	user_id integer NOT NULL,
	accepted boolean NOT NULL,
	PRIMARY KEY (list_id, user_id),
	CONSTRAINT allowed_users_user_id_fkey FOREIGN KEY (user_id)
      REFERENCES users (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT allowed_users_list_id_fkey FOREIGN KEY (list_id)
      REFERENCES helper_list (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- max url size might be a problem
CREATE TABLE item
(
	id serial PRIMARY KEY,
	list_id integer NOT NULL,
	url VARCHAR(500),
	img_url VARCHAR(500),
	purchased boolean,
	title VARCHAR(255),
	description VARCHAR(255),
	create_date TIMESTAMP NOT NULL,
    update_date TIMESTAMP NOT NULL,
	CONSTRAINT item_list_id_fkey FOREIGN KEY (list_id)
      REFERENCES helper_list (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE user_group
(
	id serial PRIMARY KEY,
	user_id integer NOT NULL,
	member_id integer NOT NULL,
	accepted boolean,
	CONSTRAINT user_group_user_id_fkey FOREIGN KEY (user_id)
      REFERENCES users (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT user_group_member_id_fkey FOREIGN KEY (member_id)
      REFERENCES users (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);
