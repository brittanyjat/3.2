CREATE TABLE users3 (
    id VARCHAR(50) NOT NULL UNIQUE,
    picture VARCHAR(240),
    firstname VARCHAR(100),
    lastname VARCHAR(100),
    gender VARCHAR(10),
    haircolor VARCHAR(10),
    eyecolor VARCHAR(10),
    hobby VARCHAR(15),
    birthday  INTEGER CHECK (birthday <= 31),
    birthmonth VARCHAR(10),
    birthyear INTEGER
)

CREATE TABLE friends (
    user1 VARCHAR(50),
    user2 VARCHAR(50),
    FOREIGN KEY ( user1 ) REFERENCES users3 ( id ) ,
    FOREIGN KEY ( user2 ) REFERENCES users3 ( id )
);

Mock Data
INSERT INTO users3 (id, picture, firstname, lastname, gender, haircolor, eyecolor, hobby) VALUES ('fredJones', 'https://robohash.org/filler.png', 'Fred', 'Jones', 'Male', 'Blonde', 'Blue', 'Hiking');
INSERT INTO users3 (id, picture, firstname, lastname, gender, haircolor, eyecolor, hobby) VALUES ('scoobyDoo', 'https://robohash.org/filler.png', 'Scoobert', 'Doo', 'Male', 'Brown', 'Brown', 'Rafting');
INSERT INTO users3 (id, picture, firstname, lastname, gender, haircolor, eyecolor, hobby) VALUES ('user3', 'https://robohash.org/happy.png', 'Greg', 'Doo', 'Male', 'Brown', 'Green', 'Rafting');
INSERT INTO users3 (id, picture, firstname, lastname, gender, haircolor, eyecolor, hobby) VALUES ('user4', 'https://robohash.org/filler.png', 'Mary', 'Martha', 'Female', 'White', 'Brown', 'Fishing');
INSERT INTO users3 (id, picture, firstname, lastname, gender, haircolor, eyecolor, hobby) VALUES ('user5', 'https://robohash.org/sick.png', 'Candy', 'Hansen', 'Female', 'Red', 'Brown', 'Rafting');
INSERT INTO users3 (id, picture, firstname, lastname, gender, haircolor, eyecolor, hobby) VALUES ('user6', 'https://robohash.org/filler.png', 'Martin', 'Lameroux', 'Male', 'Red', 'Blue', 'Video Games');
INSERT INTO users3 (id, picture, firstname, lastname, gender, haircolor, eyecolor, hobby) VALUES ('user7', 'https://robohash.org/this.png', 'Suzy', 'Hansen', 'Female', 'White', 'Green', 'Hiking');
INSERT INTO users3 (id, picture, firstname, lastname, gender, haircolor, eyecolor, hobby) VALUES ('user8', 'https://robohash.org/is.png', 'Fred', 'Jones', 'Male', 'Blonde', 'Blue', 'Hiking');
INSERT INTO users3 (id, picture, firstname, lastname, gender, haircolor, eyecolor, hobby) VALUES ('user9', 'https://robohash.org/boring.png', 'Scoobert', 'Doo', 'Male', 'Brown', 'Brown', 'Video Games');
INSERT INTO users3 (id, picture, firstname, lastname, gender, haircolor, eyecolor, hobby) VALUES ('user10', 'https://robohash.org/and.png', 'Greg', 'Doo', 'Male', 'Brown', 'Green', 'Rafting');
INSERT INTO users3 (id, picture, firstname, lastname, gender, haircolor, eyecolor, hobby) VALUES ('karatekid', 'https://robohash.org/also.png', 'Mary', 'Martha', 'Female', 'White', 'Brown', 'Fishing');
INSERT INTO users3 (id, picture, firstname, lastname, gender, haircolor, eyecolor, hobby) VALUES ('auntjemima', 'https://robohash.org/cool.png', 'Candy', 'Hansen', 'Female', 'Red', 'Brown', 'Rafting');
INSERT INTO users3 (id, picture, firstname, lastname, gender, haircolor, eyecolor, hobby) VALUES ('mondayblues', 'https://robohash.org/blob.png', 'Martin', 'Lameroux', 'Male', 'Red', 'Blue', 'Video Games');
INSERT INTO users3 (id, picture, firstname, lastname, gender, haircolor, eyecolor, hobby) VALUES ('tuesday', 'https://robohash.org/tuesday.png', 'Tuesday', 'Johnson', 'Male', 'Blonde', 'Blue', 'Rafting');
INSERT INTO users3 (id, picture, firstname, lastname, gender, haircolor, eyecolor, hobby) VALUES ('corndog', 'https://robohash.org/hotdog.png', 'Carol', 'Dodge', 'Female', 'Brown', 'Brown', 'Rafting');
INSERT INTO users3 (id, picture, firstname, lastname, gender, haircolor, eyecolor, hobby) VALUES ('snoopdawg', 'https://robohash.org/dog.png', 'Snoop', 'Dawg', 'Male', 'Brown', 'Green', 'Video Games');
INSERT INTO users3 (id, picture, firstname, lastname, gender, haircolor, eyecolor, hobby) VALUES ('Jay-z', 'https://robohash.org/lame.png', 'Jay', 'z', 'Male', 'Brown', 'Green', 'Fishing');
INSERT INTO users3 (id, picture, firstname, lastname, gender, haircolor, eyecolor, hobby) VALUES ('bspears', 'https://robohash.org/princess.png', 'Britney', 'Speaers', 'Female', 'Red', 'Brown', 'Rafting');
INSERT INTO users3 (id, picture, firstname, lastname, gender, haircolor, eyecolor, hobby) VALUES ('hydro', 'https://robohash.org/water.png', 'Flash', 'Thompson', 'Male', 'Red', 'Blue', 'Video Games');
INSERT INTO users3 (id, picture, firstname, lastname, gender, haircolor, eyecolor, hobby) VALUES ('applefan', 'https://robohash.org/apple.png', 'Mike', 'Jones', 'Male', 'White', 'Green', 'Hiking');
INSERT INTO users3 (id, picture, firstname, lastname, gender, haircolor, eyecolor, hobby) VALUES ('hGilmore', 'https://robohash.org/happy.png', 'Happy', 'Gilmore', 'Male', 'Blonde', 'Blue', 'Hiking');
INSERT INTO users3 (id, picture, firstname, lastname, gender, haircolor, eyecolor, hobby) VALUES ('frankendude', 'https://robohash.org/boring.png', 'Scoobert', 'Doo', 'Male', 'Brown', 'Brown', 'Video Games');
INSERT INTO users3 (id, picture, firstname, lastname, gender, haircolor, eyecolor, hobby) VALUES ('ironman', 'https://robohash.org/and.png', 'Tony', 'Stark', 'Male', 'Brown', 'Green', 'Rafting');
INSERT INTO users3 (id, picture, firstname, lastname, gender, haircolor, eyecolor, hobby) VALUES ('spiderman', 'https://robohash.org/spider.png', 'Peter', 'Parker', 'Male', 'White', 'Brown', 'Fishing');
INSERT INTO users3 (id, picture, firstname, lastname, gender, haircolor, eyecolor, hobby) VALUES ('sportyspice', 'https://robohash.org/cool.png', 'Melanie', 'C', 'Female', 'Red', 'Brown', 'Rafting');
INSERT INTO users3 (id, picture, firstname, lastname, gender, haircolor, eyecolor, hobby) VALUES ('poshSpice', 'https://robohash.org/blob.png', 'Victoria', 'Becham', 'Female', 'Red', 'Blue', 'Video Games');


