INSERT INTO users (username, lname, fname, "password", email, create_date, update_date, last_login, password_expir, active)
VALUES
('robotester', 'bot', 'robo', 'encrypted password here', 'robotester@gmail.com', CURRENT_DATE, CURRENT_DATE, CURRENT_DATE, CURRENT_DATE, true)

INSERT INTO helper_lists (user_id, private, list_type, create_date, update_date, list_name)
VALUES (2, false, 'shopping', CURRENT_DATE, CURRENT_DATE, 'Robo Shopping');

INSERT INTO public.items (list_id, url, img_url, purchased, title, description, create_date, update_date)
VALUES (1, 'simpleStore.com/tv', 'simpleStore.com/tv/image', false, '', '', CURRENT_DATE, CURRENT_DATE);