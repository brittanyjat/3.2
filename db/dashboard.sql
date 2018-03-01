select * from users3 
where id not in (select user2 as id from friends where user1 = $1)
and users3.id != $1;