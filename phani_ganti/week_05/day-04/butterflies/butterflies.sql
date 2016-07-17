CREATE TABLE butterflies(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  family TEXT,
  image TEXT
);

--Seed data to get things started
INSERT INTO butterflies(
  name, family, image
) VALUES ('Monarch', 'Nymphalidae', 'http://www.thecampingcanuck.com/wp-content/uploads/2016/06/monarch-butterfly.jpg');
