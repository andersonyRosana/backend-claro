const mapper = require("automapper-js");

class BaseBusiness {
    constructor(EntityRepository, entityToMap, entityToMap2) {
        this.entityRepository = EntityRepository;
        this.entityToMap = entityToMap;
        this.entityToMap2 = entityToMap2

    }

    async create(entity) {
        entity = mapper(this.entityToMap, entity);
        const createdEntity = await this.entityRepository.create(entity);
        return createdEntity;
    }

    async createFeedback(entity){
        entity = mapper(this.entityToMap2, entity);
        const createdEntity = await this.entityRepository.createFeedback(entity);
        return createdEntity;
    }

}

module.exports = BaseBusiness;
