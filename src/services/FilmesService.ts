import { CreateFilmeModel, FilmesModel } from "../models/FilmesModel";
import { createFilme, deleteFilme, findAllFilmes, findFilmeById, updateFilme } from "../repositories/FilmesRepositorie";
import { BadRequest, created, deleted, noContent, ok } from "../utils/httpHelper"

export const getAllFilmes = async () => {
    const data = await findAllFilmes()

    if (data) {
        return ok(data)
    } else {
        return noContent()
    }
}

export const getFilmeById = async (id: number) => {
    const data = await findFilmeById(id)

    if (data) {
        return ok(data)
    } else {
        return noContent()
    }
}

export const createFilmeService = async (filme: CreateFilmeModel) => {
    const data = await createFilme(filme)

    if (data) {
        return created()
    } else {
        return BadRequest()
    }
}

export const updateFilmeService = async (filme: FilmesModel, id: number) => {
    const data = await updateFilme(filme)

    if (data) {
        return ok(data)
    } else {
        return BadRequest()
    }
}

export const deleteFilmeService = async (id: number) => {
    const data = await deleteFilme(id)

    if (data > 0) {
        return deleted()
    } else {
        return BadRequest()
    }
}