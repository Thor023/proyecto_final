import express from "express";
import { getallUsers, createUser, updateUser, getUser, deleteUser, getAllUsers  } from "../controllers/UserControllers"
const router = express.Router();

//rutas para api e interaccion con base de datos
router.get('/', getAllUsers)
router.get('/:id', getUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router;