CREATE DATABASE IF NOT EXISTS companydb;

use companydb;

create table employee (
    id int not null auto_increment,
    name varchar(50) not null,
    salary int default null,
    primary key(id)
);

describe employee; 