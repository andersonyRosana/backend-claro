const BaseService = require("./base.service");
class ReportService extends BaseService {
    constructor({ ReportBusiness }) {
        super(ReportBusiness);
    }
}
module.exports = ReportService;