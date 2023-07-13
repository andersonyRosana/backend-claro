const BaseRepository = require("./base.repository");

class ReportRepository extends BaseRepository {
    constructor({ db }) {
        super(db, "report");
    }
}

module.exports = ReportRepository;
