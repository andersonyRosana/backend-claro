const BaseBusiness = require("./base.business");
const { Report } = require("./models");
const { Feedback } = require("./models")

class ReportBusiness extends BaseBusiness{
    constructor({ ReportRepository }) {
        super(ReportRepository, Report, Feedback);
    }
}

module.exports = ReportBusiness;
