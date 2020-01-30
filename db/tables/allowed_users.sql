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