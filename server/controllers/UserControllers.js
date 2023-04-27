import UserModel from "../models/UserModel";

//mostrar todos los usuarios

export const getAllUsers = async (req, res) => {
    try {
        const Users = await UserModel.findAll()
        res.json(Users)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//mostrar un usuario

export const getUser = async (req, res) => {
    try {
        const product = await UserModel.findAll({
            where:{ id:req.params.id}
        })
        res.json(Users[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}
// crear un usuario

export const createUser = async (req,res) => {
    try {
        await UserModel.create(req.body)
        res.json({
            'message':'usuario creado'
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//actualizar un usuario
export const updateUser = async (req,res) => {
    try {
        await UserModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            'message':'registro creado'
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//eliminar un producto

export const deleteUser = async (req,res) => {
    try {
        await UserModel.destroy(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            'message':'usuario eliminado'
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}