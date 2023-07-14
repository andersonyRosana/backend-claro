
class ReportRepository {


    constructor({ db }) {
        this.db = db;
        this.entity = "report";
    }

    async create(report) {
        const reportDta = await this.db[this.entity].create(report);
        return reportDta;
    }

    async getCategories(){
        const categoryDta = await this.db['category'].findAll({
            where: {
                enabled: 'y'
            }
        })

        return categoryDta;
    }

    // async createFeedback(feedback) {
    //     try {
    //         const report = await this.db[this.entity].findOne({where: {id: feedback.reportId}})
    //         if (!report) {
    //             throw new Error('Report does not exist');
    //         }
    //         for (const data of feedback.data) {
    //             await this.db['feedback'].create({
    //                 question: data.question,
    //                 answer: data.answer,
    //                 reportId: feedback.reportId
    //             })
    //         }
    //         return {isSuccess: true, error: null}
    //     } catch (error) {
    //         return {isSuccess: false, error: error.message}
    //     }
    // }
    //
    // async createCategory(category){
    //     const categoryDta = await this.db['category'].create(category);
    //     return categoryDta;
    // }



}

module.exports = ReportRepository;
