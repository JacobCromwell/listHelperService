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