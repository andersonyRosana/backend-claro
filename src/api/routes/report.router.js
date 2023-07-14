const { Router } = require("express");

module.exports = function({ ReportController }) {

    const router = Router();

    router.post("/", ReportController.addReport.bind(ReportController));
    // router.post("/feedback", ReportController.addFeedback.bind(ReportController));
    // router.post("/category", ReportController.addCategory.bind(ReportController));
    router.get("/category", ReportController.getCategories.bind(ReportController));

    return router;
};
