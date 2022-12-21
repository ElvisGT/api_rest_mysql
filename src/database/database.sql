CREATE DATABASE IF NOT EXISTS companydb;

use companydb;

create table employee (
    id int not null auto_increment,
    name varchar(50) not null,
    salary int default null,
    primary key(id)
);

insert into employee (name,salary) values 
('User1',3000),
('User2'4000),
('User3',5000);

describe employee; 