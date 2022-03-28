-- Database: wfd

-- DROP DATABASE IF EXISTS wfd;

CREATE DATABASE wfd
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

COMMENT ON DATABASE wfd
    IS 'what''s for dinner database';

-- Above is Postgress stuff, below is our stuff

DROP TABLE IF EXISTS Recipe;
DROP TABLE IF EXISTS Has_Recipe;
DROP TABLE IF EXISTS On_List;
DROP TABLE IF EXISTS Grocery_List;
DROP TABLE IF EXISTS In_Family;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Family;

CREATE TABLE Users (
    email VARCHAR(40) PRIMARY KEY,
    name VARCHAR(30), 
    password VARCHAR(20)
);

-- Users Inserts
INSERT INTO Users VALUES("cyclops@gmail.com", "Scott", "c123");
INSERT INTO Users VALUES("marvelgirl@gmail.com", "Jean", "m123");
INSERT INTO Users VALUES("phoenix@aol.com", "Rachel", "p123");
INSERT INTO Users VALUES("cable@yahoo.com", "Nathan", "c123");
INSERT INTO Users VALUES("havok@hotmail.com", "Alex", "h123");
INSERT INTO Users VALUES("vulcan@hotmail.com", "Gabriel", "v123");
INSERT INTO Users VALUES("wolverine@aol.com", "Logan", "w123");
INSERT INTO Users VALUES("wolverine@gmail.com", "Laura", "w123");
INSERT INTO Users VALUES("scout@gmail.com", "Gabby", "s123");
INSERT INTO Users VALUES("daken@yahoo.com", "Akihiro", "d123");

CREATE TABLE Family (
    FID INT PRIMARY KEY,
    name VARCHAR(30)
);

-- Family Inserts
INSERT INTO Family VALUES(1000, "Summer House");
INSERT INTO Family VALUES(1001, "Wolverines");

CREATE TABLE In_Family (
    email VARCHAR(40),
    FID INT, 
    own Boolean,
    FOREIGN KEY (email) REFERENCES Users(email) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (FID) REFERENCES Family(FID) ON DELETE CASCADE ON UPDATE CASCADE
);

-- In_Family inserts
INSERT INTO In_Family VALUES("cyclops@gmail.com", 1000, 1);
INSERT INTO In_Family VALUES("marvelgirl@gmail.com", 1000, 0);
INSERT INTO In_Family VALUES("phoenix@aol.com", 1000, 0);
INSERT INTO In_Family VALUES("cable@yahoo.com", 1000, 0);
INSERT INTO In_Family VALUES("havok@hotmail.com", 1000, 0);
INSERT INTO In_Family VALUES("vulcan@hotmail.com", 1000, 0);

INSERT INTO In_Family VALUES("wolverine@aol.com", 1001, 0);
INSERT INTO In_Family VALUES("wolverine@gmail.com", 1001, 0);
INSERT INTO In_Family VALUES("scout@gmail.com", 1001, 1);
INSERT INTO In_Family VALUES("daken@yahoo.com", 1001, 0);

CREATE TABLE Recipe (
    RID INT PRIMARY KEY,
    Ingrediants VARCHAR(500),
    Title Varchar(20)
);

-- Recipe Inserts
INSERT INTO Recipe VALUES (1000, "Lettuce, Cucumbers, Onions, Tomatoes, Cooked chicken", "Chicken Salad"); 
INSERT INTO Recipe VALUES (1001, "Hamburger meat, Cheese slices, Lettuce, Hamburger bun, Ketchup", "Cheeseburgers");

CREATE TABLE Has_Recipe (
    RID INT,
    FID INT,
    FOREIGN KEY (RID) REFERENCES Recipe(RID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (FID) REFERENCES Family(FID) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Has_Recipe Inserts
INSERT INTO Has_Recipe VALUES (1000,1000);
INSERT INTO Has_Recipe VALUES (1001,1001);

CREATE TABLE Grocery_List (
    LID INT PRIMARY KEY, 
    FID INT,
    name VARCHAR(20),
    FOREIGN KEY (FID) REFERENCES Family(FID) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Grocery_List Inserts
INSERT INTO Grocery_List VALUES (1000, 1000, "Weekly Grocery List");
INSERT INTO Grocery_List VALUES (1001, 1001, "Barbeque Shopping List");

CREATE TABLE On_List (
    LID INT, 
    item VARCHAR(30),
    FOREIGN KEY (LID) REFERENCES Grocery_List(LID) ON DELETE CASCADE ON UPDATE CASCADE
);

-- On_List Inserts
INSERT INTO On_List VALUES (1000, "Chicken");
INSERT INTO On_List VALUES (1000, "Cereal");
INSERT INTO On_List VALUES (1000, "Pasta");
INSERT INTO On_List VALUES (1000, "Bread");
INSERT INTO On_List VALUES (1000, "Chips");
INSERT INTO On_List VALUES (1001, "Chips");
INSERT INTO On_List VALUES (1001, "Hamburger Meat");
INSERT INTO On_List VALUES (1001, "Ketchup");
INSERT INTO On_List VALUES (1001, "Hamburger Buns");
INSERT INTO On_List VALUES (1001, "Paper Plates");






