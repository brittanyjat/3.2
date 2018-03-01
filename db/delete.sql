DELETE FROM friends 
WHERE user1 = $1
AND user2 = $2
RETURNING *