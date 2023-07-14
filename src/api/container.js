const { asClass, createContainer, asFunction, asValue  } = require("awilix");

//app start
const StartUp = require("./startup");
const Server = require("./server");
const config = require("../config/environments");

//routes
const Routes = require("./routes");
const ReportRouter = require("./routes/report.router");

//controllers
const { ReportController } = require("../api/controllers");
//services
const { ReportService } = require("../service");
//repository
const { ReportRepository } = require("../dal/repositories");
//db
const db = require("../dal/models");

const container  = createContainer();

container
    .register({
        app: asClass(StartUp).singleton(), 
        router: asFunction(Routes).singleton(),
        ReportRouter: asFunction(ReportRouter).singleton(),
        server: asClass(Server).singleton(),
    })
    .register({
        ReportController: asClass(ReportController).singleton()
    })
    .register({
        config: asValue(config)
    })
    .register({
        db: asValue(db)
    })
    .register({
        ReportService: asClass(ReportService).singleton(),
    })
    .register({
        ReportRepository: asClass(ReportRepository).singleton()
    })

module.exports = container;