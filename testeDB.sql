create database if not exists testebackend;
use testebackend;

create table if not exists usuarios(
	id_usuarios int auto_increment primary key,
    nome varchar(255),
    sobrenome varchar(255),
    email varchar(255),
    telefone varchar(45),
    cpf varchar(45)
);

create table if not exists enderecos_usuarios(
	id_endereco_usuario int auto_increment primary key,
	id_usuarios int,
    logradouro varchar(255),
    numero varchar(45),
    cidade varchar(255),
    uf varchar(2),
    cep varchar(45),
    bairro varchar(255),
    complemento varchar(45),
    foreign key (id_usuarios) references usuarios (id_usuarios)
);

