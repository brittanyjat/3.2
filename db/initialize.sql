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
