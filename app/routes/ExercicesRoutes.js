import express from "express";
import { TypeController, DifficultyController, MuscleController, HomeController, CollectionController, AllTypesController, AllMusclesController, AllDifficultiesController } from "../controllers/controllers.js";
const Router = express.Router();


Router.get('/collection', CollectionController)

Router.get('/', HomeController)
Router.get("/type/:type", TypeController);
Router.get("/difficulty/:level", DifficultyController);
Router.get("/muscle/:muscle", MuscleController);
Router.get("/alltypes", AllTypesController);
Router.get("/allmuscles", AllMusclesController);
Router.get("/alldifficulties", AllDifficultiesController)


export default Router;