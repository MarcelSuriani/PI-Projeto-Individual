CREATE DATABASE projetoIndividual;
USE projetoIndividual;

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL,
username VARCHAR(50) UNIQUE,
email VARCHAR(50) UNIQUE,
senha VARCHAR(30),
telefone CHAR(11),
dataCriacao DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE questao (
idQuestao INT PRIMARY KEY AUTO_INCREMENT,
pergunta VARCHAR(200),
respostaCorreta CHAR(20)
);


CREATE TABLE tentativa (
idTentativa INT PRIMARY KEY AUTO_INCREMENT,
fkUsuario INT,
dataResposta DATETIME DEFAULT CURRENT_TIMESTAMP,
totalAcertos INT,
CONSTRAINT teqfkUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE skin (
  idSkin INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50)
);

CREATE TABLE habilidade (
  idHabilidade INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50),
  codigo CHAR(1)
);

CREATE TABLE favorito (
idFavorito INT PRIMARY KEY AUTO_INCREMENT,
fkUsuario INT UNIQUE,
fkSkin INT,
fkHabilidade INT,
CONSTRAINT favfkUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
CONSTRAINT favfkSkin FOREIGN KEY (fkSkin) REFERENCES skin(idSkin),
CONSTRAINT favfkHabilidade FOREIGN KEY (fkHabilidade) REFERENCES habilidade(idHabilidade)
);

INSERT INTO habilidade VALUES
(DEFAULT,'Apunhalar', 'P'),
(DEFAULT,'Enganar', 'Q'),
(DEFAULT,'Jack in the Box', 'W'),
(DEFAULT,'Veneno de Dois Gumes', 'E'),
(DEFAULT,'Alucinações', 'R');

INSERT INTO skin VALUES
(DEFAULT,'Shaco Clássico'),
(DEFAULT,'Shaco Chapeleiro Maluco'),
(DEFAULT,'Shaco Bobo da Corte'),
(DEFAULT,'Shaco Quebra-Nozes'),
(DEFAULT,'Shaco de Brinquedo'),
(DEFAULT,'Shaco do Manicômio'),
(DEFAULT,'Shaco Goseong'),
(DEFAULT,'Shacoringa'),
(DEFAULT,'Shaco Estrela Negra'),
(DEFAULT,'Shaco Arcanista'),
(DEFAULT,'Shaco Pesadelo na Cidade do Crime'),
(DEFAULT,'Shaco Benção do Inverno'),
(DEFAULT,'Shaco Soul Fighter'),
(DEFAULT,'Shaco Soul Fighter de Prestígio'),
(DEFAULT,'Shaco Noite Apavorante'),
(DEFAULT,'Shaco Gatinho-Surpresa'),
(DEFAULT,'Shaco Pandemônio de Prestígio'),
(DEFAULT,'Shaco McDonalds');

SELECT * FROM usuario;
SELECT * FROM questao;
SELECT * FROM tentativa;
SELECT * FROM skin;
SELECT * FROM habilidade;
SELECT * FROM favorito;