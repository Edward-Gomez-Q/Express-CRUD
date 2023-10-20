const Actor = require('../Entity/actor');
class ActorDto {
    constructor(id, firstName, lastName, lastUpdate) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.lastUpdate = lastUpdate;
    }
    // Getters and Setters
    getId() {
        return this.id;
    }
    getFirstName() {
      return this.firstName;
    }
    setFirstName(firstName) {
      this.firstName = firstName;
    }
    getLastName() {
      return this.lastName;
    }
    setLastName(lastName) {
      this.lastName = lastName;
    }
    getLastUpdate() {
      return this.lastUpdate;
    }
    setLastUpdate(lastUpdate) {
      this.lastUpdate = lastUpdate;
    }
    // toString
    toString() {
      return (
        'Id: ' +
        this.id +
        ' First Name: ' +
        this.firstName +
        ' Last Name: ' +
        this.lastName +
        ' Last Update: ' +
        this.lastUpdate
      );
    }
    // Methods
    toJson() {
      return {
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        lastUpdate: this.lastUpdate,
      };
    }
    static fromJson(json) {
        const actorDto = new ActorDto();
        actorDto.setId(json.id);
        actorDto.setFirstName(json.firstName);
        actorDto.setLastName(json.lastName);
        actorDto.setLastUpdate(json.lastUpdate);
        return actorDto;
    }
    //DTO to Entity
    toEntity() {
      const actor = new Actor();
        actor.setId(this.id);
        actor.setFirstName(this.firstName);
        actor.setLastName(this.lastName);
        actor.setLastUpdate(this.lastUpdate);
        return actor;
    }

}
module.exports = ActorDto;