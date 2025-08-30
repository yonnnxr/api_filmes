import pool from "../database/database";
import { CreateSeriesModel, SeriesModel } from "../models/SeriesModel";

export const findAllSeries = async(): Promise<SeriesModel[]> => {
    const [rows] = await pool.query("SELECT * FROM series")
    return rows as SeriesModel[]
}

export const findSeriesById = async (
    id: number
): Promise<SeriesModel | undefined> => {
    const [rows] = await pool.query<any>(
        "SELECT * FROM series WHERE id = ?",
        [id]
    )
    return rows[0] as SeriesModel | undefined
}

export const createSeries = async (series: CreateSeriesModel) => {
    const [result] = await pool.query<any>(
        "INSERT INTO series (titulo, ano, genero, nota_pessoal, temporadas) VALUES (?, ?, ?, ?, ?)",
        [series.titulo, series.ano, series.genero, series.nota_pessoal, series.temporadas]
    )
    return result.insertId
}

export const updateSeries = async (series: SeriesModel, id: number) => {
    const { id: idSeries, titulo, ano, genero, nota_pessoal, temporadas } = series;
    const [result] = await pool.query<any>(
        "UPDATE series SET titulo = ?, ano = ?, genero = ?, nota_pessoal = ?, temporadas = ? WHERE id = ?",
        [titulo, ano, genero, nota_pessoal, temporadas, idSeries]
    )
    return result.affectedRows
}

export const deleteSeries = async (id: number): Promise<number> => {
    const [result] = await pool.query<any>(
        "DELETE FROM series WHERE id = ?",
        [id]
    )
    return result.affectedRows
}