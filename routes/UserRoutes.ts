import { Router } from 'express';
import UserController from '../controllers/UserController';

const UserRoutes = Router();

UserRoutes.get('/', UserController.getUser);
UserRoutes.get('/:id', UserController.getUserById);
UserRoutes.post('/', UserController.postUser);
UserRoutes.put('/:id', UserController.putUser);
UserRoutes.delete('/:id', UserController.deleteUser);

export default UserRoutes;