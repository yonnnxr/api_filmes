import { CreateSeriesModel, SeriesModel } from "../models/SeriesModel";
import { createSeries, findAllSeries, findSeriesById, updateSeries, deleteSeries } from "../repositories/SeriesRepositorie";
import { BadRequest, created, noContent, ok, deleted } from "../utils/httpHelper"

export const getAllSeries = async () => {
    const data = await findAllSeries();

    if (data) {
        return ok(data)
    } else {
        return noContent()
    }
}

export const getSeriesById = async (id: number) => {
    const data = await findSeriesById(id)

    if (data) {
        return ok(data)
    } else {
        return noContent()
    }
}

export const createSeriesService = async (series: CreateSeriesModel) => {
    const data = await createSeries(series)

    if (data) {
        return created()
    } else {
        return BadRequest()
    }
}

export const updateSeriesService = async (series: SeriesModel, id: number) => {
    const data = await updateSeries(series, id)

    if (data) {
        return ok(data)
    } else {
        return BadRequest()
    }
}

export const deleteSeriesService = async (id: number) => {
    const data = await deleteSeries(id)

    if (data > 0) {
        return deleted()
    } else {
        return BadRequest()
    }
}