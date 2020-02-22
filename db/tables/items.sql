-- max url size might be a problem
-- max img_url size might be a problem
CREATE TABLE items
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