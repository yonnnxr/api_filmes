import { Request, Response } from "express";
import { createFilmeService, deleteFilmeService, getAllFilmes, getFilmeById, updateFilmeService } from "../services/FilmesService";

export const GetFilmes = async (req: Request, res: Response) => {
    const httpResponse = await getAllFilmes()

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const GetFilmeById = async (req: Request, res: Response) => {
    const httpResponse = await getFilmeById(parseInt(req.params.id))

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const CreateFilme = async (req: Request, res: Response) => {
    const httpResponse = await createFilmeService(req.body)

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const UpdateFilme = async (req: Request, res: Response) => {
    const httpResponse = await updateFilmeService(req.body, parseInt(req.params.id))

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const DeleteFilme = async (req: Request, res: Response) => {
    const httpResponse = await deleteFilmeService(parseInt(req.params.id))

    res.status(httpResponse.statusCode).json(httpResponse.body)
}