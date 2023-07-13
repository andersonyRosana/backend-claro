const { Router } = require("express");

module.exports = function({ ReportController }) {

    const router = Router();

    router.post("/", ReportController.addReport.bind(ReportController));
    router.post("/feedback", ReportController.addfeedback.bind(ReportController));

    return router;
};
