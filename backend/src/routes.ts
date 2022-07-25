import express from "express";

import ClassesController from "./controller/ClassesController";

const routes = express.Router();
const classesControllers = new ClassesController();

routes.post("/classes", classesControllers.create);

export default routes;
