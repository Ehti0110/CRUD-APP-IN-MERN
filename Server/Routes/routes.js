import { Router } from "express";
import { addUser, getUsers, getUser, editUser, deleteUser } from "../Controllers/controllers.js";


const routes = Router();

routes.post('/add', addUser);
routes.get('/', getUsers);
routes.get('/:id', getUser);
// routes.post('/:id', editUser); 
// OR 
routes.put('/:id', editUser); 
routes.delete('/:id', deleteUser);


export default routes;