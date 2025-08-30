export interface FilmesModel {
    id: number;
    titulo: string;
    ano: number;
    genero: string;
    nota_pessoal: number;
}

export interface CreateFilmeModel {
    titulo: string;
    ano: number;
    genero: string;
    nota_pessoal: number;
}