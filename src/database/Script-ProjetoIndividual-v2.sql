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
totalAcertos INT,
dataResposta DATETIME DEFAULT CURRENT_TIMESTAMP,
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

CREATE TABLE tentativaQuestao (
idTentativaQuestao INT PRIMARY KEY AUTO_INCREMENT,
fkTentativa INT,
fkQuestao INT,
acertou BOOLEAN,
CONSTRAINT tqfkTentativa FOREIGN KEY (fkTentativa) REFERENCES tentativa(idTentativa),
CONSTRAINT tqfkQuestao FOREIGN KEY (fkQuestao) REFERENCES questao(idQuestao)
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

INSERT INTO questao (pergunta, respostaCorreta) VALUES
('O que Shaco era antes de ser corrompido pelo caos?', 'alternativaB'),
('Shaco mata por ódio e busca vingança contra quem destruiu sua vida.', 'alternativaB'),
('Qual é o efeito da passiva do Shaco, Apunhalar?', 'alternativaB'),
('O que acontece quando o clone do Shaco (R) morre?', 'alternativaC'),
('O Q do Shaco causa dano crítico ao atacar pelas costas enquanto invisível.', 'alternativaA'),
('Qual habilidade do Shaco causa medo nos inimigos?', 'alternativaB'),
('Qual skin do Shaco é inspirada em Alice no País das Maravilhas?', 'alternativaC'),
('O caos que habita Shaco criou uma consciência humana com emoções e empatia.', 'alternativaB'),
('Segundo a lore, como Shaco foi criado?', 'alternativaB'),
('Qual habilidade envenena os inimigos passivamente e causa dano extra abaixo de 30% de vida?', 'alternativaC'),
('Qual detalhe oculto conecta Shaco diretamente ao conceito de caos?', 'alternativaC'),
('O que é o que é? Um palhaço sorridente, vestido de amarelo e vermelho.', 'alternativaD');

SELECT * FROM usuario;
SELECT * FROM questao;
SELECT * FROM tentativa;
SELECT * FROM skin;
SELECT * FROM habilidade;
SELECT * FROM favorito;

SELECT * FROM tentativaQuestao;