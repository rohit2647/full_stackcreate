-- Create Database
CREATE DATABASE db;

-- Select Database
USE book_db;

-- Create Books Table
CREATE TABLE books (
    book_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    price DECIMAL(10,2),
    published_year INT,
    quantity INT DEFAULT 1
);

-- Insert 50 Books
INSERT INTO books
(title, author, genre, price, published_year, quantity)
VALUES
('The Alchemist', 'Paulo Coelho', 'Fiction', 299.00, 1988, 5),
('Atomic Habits', 'James Clear', 'Self Help', 499.00, 2018, 8),
('The Psychology of Money', 'Morgan Housel', 'Finance', 399.00, 2020, 6),
('Rich Dad Poor Dad', 'Robert Kiyosaki', 'Finance', 350.00, 1997, 7),
('Ikigai', 'Hector Garcia', 'Self Help', 299.00, 2016, 5),
('Clean Code', 'Robert C. Martin', 'Programming', 699.00, 2008, 4),
('The Pragmatic Programmer', 'Andrew Hunt', 'Programming', 799.00, 1999, 3),
('Introduction to Algorithms', 'Thomas H. Cormen', 'Algorithms', 999.00, 2009, 2),
('Java: The Complete Reference', 'Herbert Schildt', 'Programming', 850.00, 2022, 4),
('Head First Java', 'Kathy Sierra', 'Programming', 750.00, 2005, 3),
('Harry Potter and the Sorcerer''s Stone', 'J.K. Rowling', 'Fantasy', 450.00, 1997, 6),
('Harry Potter and the Chamber of Secrets', 'J.K. Rowling', 'Fantasy', 450.00, 1998, 5),
('Harry Potter and the Prisoner of Azkaban', 'J.K. Rowling', 'Fantasy', 475.00, 1999, 5),
('Harry Potter and the Goblet of Fire', 'J.K. Rowling', 'Fantasy', 499.00, 2000, 4),
('Harry Potter and the Order of Phoenix', 'J.K. Rowling', 'Fantasy', 550.00, 2003, 4),
('The Great Gatsby', 'F. Scott Fitzgerald', 'Classic', 299.00, 1925, 5),
('1984', 'George Orwell', 'Dystopian', 350.00, 1949, 7),
('Animal Farm', 'George Orwell', 'Political Fiction', 250.00, 1945, 8),
('To Kill a Mockingbird', 'Harper Lee', 'Classic', 399.00, 1960, 4),
('Pride and Prejudice', 'Jane Austen', 'Romance', 299.00, 1813, 5),
('The Hobbit', 'J.R.R. Tolkien', 'Fantasy', 499.00, 1937, 6),
('The Lord of the Rings', 'J.R.R. Tolkien', 'Fantasy', 899.00, 1954, 3),
('The Kite Runner', 'Khaled Hosseini', 'Drama', 399.00, 2003, 5),
('A Thousand Splendid Suns', 'Khaled Hosseini', 'Drama', 450.00, 2007, 4),
('The Book Thief', 'Markus Zusak', 'Historical Fiction', 399.00, 2005, 5),
('Think and Grow Rich', 'Napoleon Hill', 'Self Help', 299.00, 1937, 6),
('How to Win Friends and Influence People', 'Dale Carnegie', 'Self Help', 350.00, 1936, 7),
('The 7 Habits of Highly Effective People', 'Stephen Covey', 'Self Help', 450.00, 1989, 5),
('Deep Work', 'Cal Newport', 'Productivity', 399.00, 2016, 6),
('Digital Minimalism', 'Cal Newport', 'Productivity', 350.00, 2019, 4),
('Sapiens', 'Yuval Noah Harari', 'History', 599.00, 2011, 5),
('Homo Deus', 'Yuval Noah Harari', 'History', 599.00, 2015, 4),
('21 Lessons for the 21st Century', 'Yuval Noah Harari', 'Non Fiction', 550.00, 2018, 3),
('A Brief History of Time', 'Stephen Hawking', 'Science', 499.00, 1988, 5),
('The Selfish Gene', 'Richard Dawkins', 'Science', 450.00, 1976, 3),
('Wings of Fire', 'A.P.J. Abdul Kalam', 'Biography', 299.00, 1999, 8),
('Ignited Minds', 'A.P.J. Abdul Kalam', 'Motivation', 250.00, 2002, 6),
('My Journey', 'A.P.J. Abdul Kalam', 'Biography', 299.00, 2013, 5),
('India 2020', 'A.P.J. Abdul Kalam', 'Technology', 350.00, 1998, 4),
('The Discovery of India', 'Jawaharlal Nehru', 'History', 499.00, 1946, 3),
('The Intelligent Investor', 'Benjamin Graham', 'Finance', 699.00, 1949, 4),
('One Up On Wall Street', 'Peter Lynch', 'Finance', 599.00, 1989, 3),
('The Richest Man in Babylon', 'George S. Clason', 'Finance', 299.00, 1926, 6),
('Zero to One', 'Peter Thiel', 'Business', 399.00, 2014, 5),
('Start With Why', 'Simon Sinek', 'Business', 399.00, 2009, 4),
('Database System Concepts', 'Abraham Silberschatz', 'Database', 899.00, 2019, 3),
('Operating System Concepts', 'Abraham Silberschatz', 'Operating System', 950.00, 2018, 3),
('Computer Networks', 'Andrew S. Tanenbaum', 'Networking', 899.00, 2010, 4),
('Artificial Intelligence: A Modern Approach', 'Stuart Russell', 'Artificial Intelligence', 999.00, 2021, 2),
('Machine Learning', 'Tom M. Mitchell', 'Machine Learning', 850.00, 1997, 3);