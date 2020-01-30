INSERT INTO users (username, fname, lname, password, email, create_date, update_date, last_login)
VALUES ('tester', 'testFirst', 'testLast', 'encrypted password here', 'test@gmail.com', CURRENT_DATE, CURRENT_DATE, CURRENT_DATE);

INSERT INTO helper_list (user_id, private, list_type, create_date, update_date)
VALUES (1, false, 'shopping', CURRENT_DATE, CURRENT_DATE);

INSERT INTO public.item (list_id, url, img_url, purchased, title, description, create_date, update_date)
VALUES (1, 'simpleStore.com/tv', 'simpleStore.com/tv/image', false, '', '', CURRENT_DATE, CURRENT_DATE);