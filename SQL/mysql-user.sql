CREATE USER 'virtx'@'172.17.0.3' IDENTIFIED BY 'virtx';


GRANT ALL PRIVILEGES ON * . * TO 'virtx'@'172.17.0.3';

FLUSH PRIVILEGES;
