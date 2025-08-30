export interface SeriesModel {
    id: number;
    titulo: string;
    ano: number;
    genero: string;
    temporadas: number;
    nota_pessoal: number;
}

export interface CreateSeriesModel {
    titulo: string;
    ano: number;
    genero: string;
    temporadas: number;
    nota_pessoal: number;
}