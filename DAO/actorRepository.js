const Actor = require('../Entity/actor');
// Obtener todos los actores
exports.getActors = function (callback) {
    Actor.findAll()
        .then((actors) => {
            callback(null, actors);
        })
        .catch((err) => {
            callback(err);
        });
}

// Obtener un actor por su ID
exports.getActorById = function (id, callback) {
    Actor.findByPk(id)
        .then((actor) => {
            callback(null, actor);
        })
        .catch((err) => {
            callback(err);
        });
}

// Crear un actor
exports.createActor = function (actorData, callback) {
    Actor.create(actorData)
        .then((actor) => {
            callback(null, actor);
        })
        .catch((err) => {
            callback(err);
        });
}

// Actualizar un actor
exports.updateActor = function (id, actorData, callback) {
    Actor.findByPk(id)
        .then((actor) => {
            if (!actor) {
                return callback(new Error('Actor no encontrado'));
            }
            return actor.update(actorData);
        })
        .then((updatedActor) => {
            callback(null, updatedActor);
        })
        .catch((err) => {
            callback(err);
        });
}

// Eliminar un actor
exports.deleteActor = function (id, callback) {
    Actor.findByPk(id)
        .then((actor) => {
            if (!actor) {
                return callback(new Error('Actor no encontrado'));
            }
            return actor.destroy();
        })
        .then(() => {
            callback(null, 'Actor eliminado correctamente');
        })
        .catch((err) => {
            callback(err);
        });
}