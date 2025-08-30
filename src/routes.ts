import { Router } from 'express';
import { CreateFilme, DeleteFilme, GetFilmeById, GetFilmes, UpdateFilme } from './controllers/FilmesController';
import { CreateSeries, DeleteSeries, GetSeries, GetSeriesById, UpdateSeries } from './controllers/SeriesController';

const router = Router();

//get
router.get("/series", GetSeries)
router.get("/filmes", GetFilmes)
router.get("/series/:id", GetSeriesById)
router.get("/filmes/:id", GetFilmeById)
//create
router.post("/series", CreateSeries)
router.post("/filmes", CreateFilme)
//update
router.put("/filmes/:id", UpdateFilme)
router.put("/series/:id", UpdateSeries)
//delete
router.delete("/filmes/:id", DeleteFilme)
router.delete("/series/:id", DeleteSeries)

export default router;