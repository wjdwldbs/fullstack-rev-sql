DROP DATABASE IF EXISTS ebid;
CREATE DATABASE ebid;
USE ebid;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  item VARCHAR(100) NOT NULL,
  min_cost FLOAT(10, 2) NOT NULL,
  curr_bid FLOAT(10, 2) NOT NULL,
  ends_in INT NOT NULL,
  img VARCHAR(500)

);

--   ensure your schema has the following:
--     item:
--       - string,
--     min_cost:
--       - float,
--     curr_bid:
--       - float,
--     ends_in:
--       - integer
--     image:
--       - string
-- */