const Empleado = require("../models/empleados.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let empleado = new Empleado({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,    
        direccion: req.body.direccion
    })

empleado.save(function(err){
    if(err){
        console.log =false,
        response.exito =false,
        response.msg = "Error al guardar el empleado"
        res.json(response)
        return;
    }
    response.exito = true,
    response.msg = "El empleado se guardo se guardó correctamente"
    res.json(response)
})

}
exports.find = function(req,res){
    Empleado.find(function(err, empleados){
        res.json(empleados)
    })
}

exports.findOne = function(req,res){
    Empleado.findOne({_id: req.params.id},function(err, empleado){
        res.json(empleado)
    })
}
exports.update = function(req,res){
    let empleado = {
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,    
        direccion: req.body.direccion,
    }

    Empleado.findByIdAndUpdate(req.params.id, {$set: empleado}, function(err){
        if(err){
            console.err(err),
            response.exito = false,
            response.msg = "Error al cambiar datos de empleado"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "Los datos del empleado se han actualizado"
        res.json(response)
   
    })
}

exports.remove = function(req,res){
    Empleado.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar al empleado"
            res.json(response)
            return;
        }
        
        response.exito = true,
        response.msg = "El empleado ha sido eliminado"
        res.json(response)
    })
}