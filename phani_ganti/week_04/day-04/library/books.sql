CREATE TABLE books(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  cover TEXT,
  author TEXT,
  pubyear TEXT
);

INSERT INTO books(name, cover, author, pubyear) VALUES('Lie Of Pie', 'http://imgfave-herokuapp-com.global.ssl.fastly.net/image_cache/1373330220541603.jpg',
'Yann Martel', '2010');
