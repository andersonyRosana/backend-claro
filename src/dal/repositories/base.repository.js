const {logger} = require("sequelize/lib/utils/logger");

class BaseRepository {


    constructor(db, entity) {
        this.db = db;
        this.entity = entity;
    }

    async create(report) {
        const reportDta = await this.db[this.entity].create({
            subscriber: report.subscriber,
            address: report.address,
            type: report.type,
            latitude: report.latitude,
            longitude: report.longitude,
            comment: report.comment,
            creationDate: report.creationDate
        });

        return reportDta;
    }

    async createFeedback(feedback) {
        try {
            const report = await this.db[this.entity].findOne({where: {id: feedback.reportId}})
            if (!report) {
                throw new Error('Report does not exist');
            }

            let feedbackData = await this.db['feedback'].findOne({where: {reportId: feedback.reportId}})
            if (feedbackData) {
                return feedbackData;
            }

            for (const data of feedback.data) {
                await this.db['feedback'].create({
                    question: data.question,
                    answer: data.answer,
                    reportId: feedback.reportId
                })
            }

            return { isSuccess: true, error: null }
        } catch (error) {
            return { isSuccess: false, error: error.message }
        }
    }


}

module.exports = BaseRepository;
