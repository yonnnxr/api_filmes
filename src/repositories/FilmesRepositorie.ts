import pool from "../database/database";
import { CreateFilmeModel, FilmesModel } from "../models/FilmesModel";


export const findAllFilmes = async (): Promise<FilmesModel[]> => {
    const [rows] = await pool.query<any>("SELECT * FROM filmes")
    return rows as FilmesModel[];
}

export const findFilmeById = async (
    id: number
): Promise<FilmesModel | undefined> => {
    const [rows] = await pool.query<any>(
        "SELECT * FROM filmes WHERE id = ?",
        [id]
    )
    return rows[0] as FilmesModel | undefined
}

export const createFilme = async (filme: CreateFilmeModel) => {
    const [result] = await pool.query<any>(
        "INSERT INTO filmes (titulo, ano, genero, nota_pessoal) VALUES (?, ?, ?, ?)",
        [filme.titulo, filme.ano, filme.genero, filme.nota_pessoal]
    )
    return result.insertId
}

export const updateFilme = async (filme: FilmesModel) => {
    const { id: idFilme, titulo, ano, genero, nota_pessoal } = filme;
    const [result] = await pool.query<any>(
        "UPDATE filmes SET titulo = ?, ano = ?, genero = ?, nota_pessoal = ? WHERE id = ?",
        [titulo, ano, genero, nota_pessoal, idFilme]
    )
    return result.affectedRows
}

export const deleteFilme = async (id: number): Promise<number> => {
    const [result] = await pool.query<any>(
        "DELETE FROM filmes WHERE id = ?",
        [id]
    )
    return result.affectedRows
}