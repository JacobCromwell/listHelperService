CREATE TABLE helper_lists
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