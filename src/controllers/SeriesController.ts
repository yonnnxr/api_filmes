import { Request, Response } from "express";
import { createSeriesService, deleteSeriesService, getAllSeries, getSeriesById, updateSeriesService } from "../services/SeriesService";

export const GetSeries = async (req: Request, res: Response) => {
    const httpResponse = await getAllSeries();

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const GetSeriesById = async (req: Request, res: Response) => {
    const httpResponse = await getSeriesById(parseInt(req.params.id))

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const CreateSeries = async (req: Request, res: Response) => {
    const httpResponse = await createSeriesService(req.body)

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const UpdateSeries = async (req: Request, res: Response) => {
    const httpResponse = await updateSeriesService(req.body, parseInt(req.params.id))

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const DeleteSeries = async (req: Request, res: Response) => {
    const httpResponse = await deleteSeriesService(parseInt(req.params.id))

    res.status(httpResponse.statusCode).json(httpResponse.body)
}