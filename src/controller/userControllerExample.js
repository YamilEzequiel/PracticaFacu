const { User } = require("../database/models");


//Como traer todos los usuarios
exports.allUser = async(req,res) => {

    try{
        let user = await User.findAll();
        res.json(
            {
                'Msj' : 'Listado de usuarios',
                'Usuario' : user
            }
        )
    }catch(error){
        res.json(
            {
                'Msj' : 'error',
                'error': error
            }
        )
    }
}

//Como buscar un usuario
exports.findUser = async(req,res) => {
    try{
        const { id } = req.params;
        //rescatalo de req.query en ves de params
        //     console.log(req.query);

        const user = await User.findOne({where: { id }} );

        if(!user){
            return HTPP_RESPONSE.HttpResponse.NotFound(res,'No se encontro el usuario')
        }
        
        return HTPP_RESPONSE.HttpResponse.Ok(res,'Usuario encontrado',user)
    }catch(error){
        return HTPP_RESPONSE.HttpResponse.NotFound(res,'Problemas al buscar el usuario',error)
    }
}

//Como crear un usuario
exports.createUser = async(req,res) => {
    try{
        let user = await User.create({  ...req.body, });
        return HTPP_RESPONSE.HttpResponse.Ok(res,'Usuario Creado',user)
    }catch(error){
        return HTPP_RESPONSE.HttpResponse.NotFound(res,'Problemas al crear el usuario',error)
    }
}

//Como actualizar un usuario
exports.updateUser = async(req,res) => {
    try{
        const { id } = req.body;

        const user = await User.findOne({where: { id }} );

        if(!user){
            return HTPP_RESPONSE.HttpResponse.NotFound(res,'No se encontro un usuario para actualizar')
        }

        const updateUser = await user.update({ ...req.body });

        return HTPP_RESPONSE.HttpResponse.Ok(res,'Usuario Actualizado',updateUser)
    }catch(error){
        return HTPP_RESPONSE.HttpResponse.NotFound(res,'Problemas al actualizar el usuario',error)
    }
}

// Como elinminar un usuario
exports.deleteUser = async(req,res) => {
    try{
        const { id } = req.params;

        const user = await User.findOne({where: { id }} );

        if(!user){
            return HTPP_RESPONSE.HttpResponse.NotFound(res,'No se encontro el usuario')
        }

        const deleteUser = await user.destroy();
        
        return HTPP_RESPONSE.HttpResponse.Ok(res,'Usuario Eliminado!',deleteUser)
    }catch(error){
        return HTPP_RESPONSE.HttpResponse.NotFound(res,'Problemas al buscar el usuario',error)
    }
}
