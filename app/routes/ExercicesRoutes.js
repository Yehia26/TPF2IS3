import express from "express";
import { ControlllerType, ControllerDifficulty, ControllerMuscle, ControllerHome } from "../controllers/controllers.js";
const Router = express.Router();


Router.get('/', ControllerHome)
Router.get("/type/:type", ControlllerType);
Router.get("/difficulty/:level", ControllerDifficulty);
Router.get("/muscle/:muscle", ControllerMuscle);


export default Router;