const { Report } = require("../service/models");
const { Feedback } = require("../service/models");
const { Category } = require("../service/models");

const mapper = require("automapper-js");

class ReportService {
    constructor({ ReportRepository }) {
        this.entityRepository = ReportRepository;
        this.entityToMap = Report;
        this.entityToMap2 = Feedback;
        this.entityToMap3 = Category

    }

    async create(entity) {
        entity = mapper(this.entityToMap, entity);
        const entityDtos = {
            category: entity.category,
            subcategory: entity.subcategory,
            phone: entity.phone,
            customer_reported: entity.customer_reported,
            assignment: entity.assignment,
            notes: entity.notes,
            frequency: entity.frequency,
            address: entity.address,
            latitude: entity.latitude,
            longitude: entity.longitude,
            creationDate: entity.creationDate
        }
        return this.entityRepository.create(entityDtos);
    }


    async getCategories(){
        const entities = await this.entityRepository.getCategories();
        if (!entities) {
            return [];
        }

        return entities.map(entity => mapper(this.entityToMap3, entity.toJSON()));
    }

    // async createFeedback(entity){
    //     entity = mapper(this.entityToMap2, entity);
    //     const createdEntity = await this.entityRepository.createFeedback(entity);
    //     return createdEntity;
    // }
    //
    // async createCategory(entity){
    //     entity = mapper(this.entityToMap3, entity);
    //     const entityDtos = {
    //         category_id: entity.category_id,
    //         category: entity.category,
    //         subcategory_id: entity.subcategory_id,
    //         subcategory: entity.subcategory,
    //         description: entity.description,
    //         enabled: entity.enabled
    //     }
    //     const createdEntity = await this.entityRepository.createCategory(entityDtos);
    //     return createdEntity;
    // }

}

module.exports = ReportService;
