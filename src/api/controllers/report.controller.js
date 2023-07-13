


class ReportController {

    constructor({ ReportService }) {
        this.reportService = ReportService;
    }

    async addReport(req, res) {
        const { body } = req;
        const createdReport = await this.reportService.create(body);
        return res.status(201).send({
            hasError: false,
            response: createdReport.id
        });
    }

    async addfeedback(req, res){
        const { body } = req;
        const createdFeedback = await this.reportService.createFeedback(body);

        if (createdFeedback.isSuccess === false) {
            return res.status(400).send({
                hasError: true,
                response: createdFeedback.error
            });
        } else {
            return res.status(200).send({
                hasError: false,
                response: "success"
            });
        }
    }
}

module.exports = ReportController;