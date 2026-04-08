create database aula_add;
use aula_add;
create table usuario(
	id INT auto_increment not null primary key,
    nome varchar(60) not null,
    email varchar(20) not null
);