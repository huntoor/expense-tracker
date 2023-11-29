CREATE TABLE users ( user_id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(50) NOT NULL, password VARCHAR(255) NOT NULL, email VARCHAR(100) NOT NULL ); 

CREATE TABLE expense_categories ( category_id INT AUTO_INCREMENT PRIMARY KEY, category_name VARCHAR(50) NOT NULL ); 

CREATE TABLE expenses ( expense_id INT AUTO_INCREMENT PRIMARY KEY, user_id INT, amount DECIMAL(10, 2) NOT NULL, date DATE NOT NULL, category_id INT, description TEXT, FOREIGN KEY (user_id) REFERENCES users(user_id), FOREIGN KEY (category_id) REFERENCES expense_categories(category_id) );
