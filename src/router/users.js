//archivo para manejar las rutas de usuarios

import { Router } from "express";
import { auth, createUsers, getData, logIn, addMateria,cursar ,getMateriasById} from "../controller/users";

//objeto para manejo de url
const routerUsers = Router();

//Enpoint para loguear usuario
/**
 * @swagger
 * /user/login:
 *  post:
 *      sumary: loguear usuario
 */
routerUsers.post("/user/login", logIn);

/**
 * @swagger
 * /usersp:
 *   post:
 *     summary: Crea usuarios
 */
routerUsers.post("/user/usersp", createUsers);

/**
 * @swagger
 * /user/getData:
 *  get:
 *      sumary: obtener lista de materias
 */
routerUsers.get("/user/getData", auth, getData);

export default routerUsers;



routerUsers.post("/user/addMateria", addMateria);
/**
 * @swagger
 * /usersp:
 *   post:
 *     summary: Crea materia
 */

routerUsers.post("/user/cursar", cursar);
routerUsers.get("/user/materias/:idAlumno", getMateriasById);