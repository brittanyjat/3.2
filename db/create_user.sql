INSERT INTO users3 (id, firstname, lastname, picture)
VALUES ($1, $2, $3, $4)
RETURNING *