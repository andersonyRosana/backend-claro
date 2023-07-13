class BaseService {
    constructor(EntityBusiness) {
        this.entityBusiness = EntityBusiness;
    }

    async create(entity) {
        const createdEntity = await this.entityBusiness.create(entity);
        return createdEntity;
    }

    async createFeedback(entity){
        const createdEntity = await this.entityBusiness.createFeedback(entity);
        return createdEntity;
    }
}

module.exports = BaseService;
