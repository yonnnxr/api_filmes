import { httpResponse } from "../models/HttpResponseModel"


export const ok = async (data:any ): Promise<httpResponse> => {
    return {
        statusCode: 200,
        body: data
    }
}

export const noContent = async (): Promise<httpResponse> => {
    return {
        statusCode: 204,
        body: null  
    }
}

export const BadRequest = async (): Promise<httpResponse> => {
    return {
        statusCode: 400,
        body: null
    }
}

export const created = async (): Promise<httpResponse> => {
    return {
        statusCode: 201,
        body: {
            message: "Sucesso!"
        }
    }
}

export const deleted = async (): Promise<httpResponse> => {
    return {
        statusCode: 200,
        body: {
            message: "Deletado com sucesso"
        }
    }
}