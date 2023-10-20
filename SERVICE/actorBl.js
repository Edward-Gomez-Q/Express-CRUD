const actorRepository = require('../DAO/actorRepository');
const actorDto = require('../DTO/actorDTO');
const Actor = require('../Entity/actor');
// Obtener todos los actores
exports.getActors = function (callback) {
    actorRepository.getActors((err, actors) => {
        if (err) {
            callback(err);
        } else {
            //Convertir los actores a DTO
            const actorsDto = actors.map((actor) => {
                return new actorDto(actor.actor_id, actor.first_name, actor.last_name, actor.last_update);
            });
            callback(null, actorsDto);
        }
    });
}
// Obtener un actor por su ID
exports.getActorById = function (id, callback) {
    actorRepository.getActorById(id, (err, actor) => {
        if (err) {
            callback(err);
        } else {
            if(!actor)
            {
                callback(new Error('Actor no encontrado'));
            } else {
                //Convertir el actor a DTO
                const actorDtoR = new actorDto(actor.actor_id, actor.first_name, actor.last_name, actor.last_update);
                callback(null, actorDtoR);
            }
        }
    });
}
// Crear un actor
exports.createActor = function (actorDtoRe, callback) {
    //Convertir el DTO a un objeto de la clase Actor
    const actorData = Actor.createFromDto(actorDtoRe);
    actorRepository.createActor(actorData, (err, actor) => {
        if (err) {
            callback(err);
        } else {
            //Convertir el actor a DTO
            console.log('actor: ', actor);
            const actorDtoRES = new actorDto(actor.dataValues.actor_id, actor.dataValues.first_name, actor.dataValues.last_name, actor.dataValues.last_update);
            console.log('actorDto: ', actorDtoRES);
            callback(null, actorDtoRES);
        }
    } );
}
// Actualizar un actor
exports.updateActor = function (id, actorDtoRe, callback) {
    //Validar que el actor exista
    actorRepository.getActorById(id, (err, actor) => {
        if (err) {
            callback(new Error('Actor no encontrado'));
        } else {
            if(!actor)
            {
                callback(new Error('Actor no encontrado'));
            } else {
                //Actualizar el actor
                //Convertir el DTO a un objeto de la clase Actor
                const actorData = Actor.createFromDto(actorDtoRe);
                actorRepository.updateActor(id, actorData, (err, actor) => {
                    if (err) {
                        callback(new Error('Actor no encontrado'));
                    } else {
                        if(!actor)
                        {
                            callback(new Error('Actor no encontrado'));
                        } else {
                            //Convertir el actor a DTO
                            console.log('actor: ', actor);
                            const actorDtoRE = new actorDto(actor.dataValues.actor_id, actor.dataValues.first_name, actor.dataValues.last_name, actor.dataValues.last_update);
                            callback(null, actorDtoRE);
                        }
                    }
                });
            }
        }
    });
}
// Eliminar un actor
exports.deleteActor = function (id, callback) {
    actorRepository.deleteActor(id, callback);
}
