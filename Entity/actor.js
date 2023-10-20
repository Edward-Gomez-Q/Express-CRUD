// actor.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../DB/databaseConnection');

class Actor extends Model { }

Actor.init({

    actor_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El campo actor_id no puede ser nulo'
            },
            isInt: {
                msg: 'El campo actor_id debe ser un número entero'
            }
        }
    },

    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El campo first_name no puede ser nulo'
            },
            len: {
                args: [2, 45],
                msg: 'El campo first_name debe tener entre 2 y 45 caracteres'
            }
        }
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El campo last_name no puede ser nulo'
            },
            len: {
                args: [2, 45],
                msg: 'El campo last_name debe tener entre 2 y 45 caracteres'
            }
        }
    },
    last_update: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El campo last_update no puede ser nulo'
            }
        }
    }
}, {
    sequelize,
    modelName: 'Actor',
    tableName: 'actor',
    timestamps: false
});
Actor.createFromDto = function (actorDto) {
    this.first_name = actorDto.getFirstName();
    this.last_name = actorDto.getLastName();
    this.last_update = new Date();
    return this;
}

module.exports = Actor;