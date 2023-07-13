const { Router } = require("express");
const cors = require("cors");
const express = require("express");
const compression = require("compression");

module.exports = ({ ReportRouter }) => {
    const router = Router();
    const apiRoute = Router();

    // para solucionar problemas con las politicas de cors
    const corsOptions = {
        // origin: 'http://localhost:4200',
        // optionsSuccessStatus: 200,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        exposedHeaders: ['Access-Control-Allow-Origin'] // Aquí debes agregar el nombre del encabezado que deseas exponer
    };
    // end problemas con cors

    apiRoute
        .use(cors(corsOptions))
        .use(express.json())
        .use(compression());

    apiRoute.use("/report", ReportRouter);
    router.use("/api", apiRoute);

    return router;
}
