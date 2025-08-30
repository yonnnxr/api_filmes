
-- Inserções de filmes
INSERT INTO filmes (titulo, ano, genero, nota_pessoal)
VALUES 
    ('O Poderoso Chefão', 1972, 'Crime', 9.2),
    ('Interestelar', 2014, 'Ficção Científica', 8.6),
    ('A Origem', 2010, 'Ação', 8.8),
    ('Parasita', 2019, 'Thriller', 8.6),
    ('O Senhor dos Anéis: A Sociedade do Anel', 2001, 'Fantasia', 8.8),
    ('Matrix', 1999, 'Ação', 8.7);

-- Inserções de séries
INSERT INTO series (titulo, ano, genero, nota_pessoal, temporadas)
VALUES 
    ('Breaking Bad', 2008, 'Drama', 9.5, 5),
    ('Stranger Things', 2016, 'Suspense', 8.7, 4),
    ('Dark', 2017, 'Mistério', 8.8, 3),
    ('La Casa de Papel', 2017, 'Ação', 8.2, 5);

-- Buscar todos os filmes
SELECT * FROM filmes;

-- Buscar todos as séries
SELECT * FROM series;

-- Buscar um filme por ID
SELECT * FROM filmes WHERE id = ?;

-- Buscar uma série por ID
SELECT * FROM series WHERE id = ?;

-- Atualizar um filme por ID
UPDATE filmes
SET titulo = ?, ano = ?, genero = ?, nota_pessoal = ?
WHERE id = ?;

-- Atualizar uma série por ID
UPDATE series
SET titulo = ?, ano = ?, genero = ?, nota_pessoal = ?
WHERE id = ?;

-- Remover um filme por ID
DELETE FROM filmes WHERE id = ?;

-- Remover uma série por ID
DELETE FROM series WHERE id = ?;
