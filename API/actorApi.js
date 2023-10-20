const express = require('express');
const router = express.Router();
const actorBl = require('../SERVICE/actorBl');
const ActorDto = require('../DTO/actorDTO');
// Obtener todos los actores
router.get('/actors', function (req, res) {
    actorBl.getActors(function (err, actors) {
        if (err) {
            res.status(400).json(err);
        } else {
            res.json(actors);
        }
    });

});
// Obtener un actor por su ID
router.get('/actors/:id', function (req, res) {
    actorBl.getActorById(req.params.id, function (err, actor) {
        if (err) {
            res.status(400).json(err);
        } else {
            res.json(actor);
        }
    });
});
// Crear un actor
router.post('/actors', function (req, res) {
    const actorDtoR = new ActorDto(req.body.id, req.body.firstName, req.body.lastName, req.body.lastUpdate);
    actorBl.createActor(actorDtoR, function (err, actor) {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(actor.toJson());
        }
    });
});
// Actualizar un actor
router.put('/actors/:id', function (req, res) {
    const actorDto = new ActorDto(req.body.id, req.body.firstName, req.body.lastName, req.body.lastUpdate);
    actorBl.updateActor(req.params.id, actorDto, function (err, actor) {
        if (err) {
            res.status(400).json(new Error('Actor no encontrado'));
        } else {
            res.json(actor);
        }
    });
});
// Eliminar un actor
router.delete('/actors/:id', function (req, res) {
    actorBl.deleteActor(req.params.id, function (err, actor) {
        if (err) {
            res.status(400).json(err);
        } else {
            res.json(actor);
        }
    });
});

module.exports = router;
