import { CommonRoutesConfig } from "../common/common.routes.config";
import adminsMiddleware from "./middleware/admins.middleware";
import adminsController from "./controllers/admins.controller";
import express from "express";

export class AdminsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'AdminsRoutes');
    }
    configureRoutes(): express.Application {
        this.app
            .route('/admins')
            .get(adminsController.listAdmins)
            .post(
                adminsMiddleware.validateRequiredAdminBodyFields,
                adminsMiddleware.validateSameEmailDoesntExist,
                adminsController.createAdmins
            );

        this.app.param(`adminId`, adminsMiddleware.extractAdminId);
        this.app.route(`/admins/:adminId`)
            .all(adminsMiddleware.validateAdminExists)
            .get(adminsController.getAdminById)
            .delete(adminsController.removeUser);

        this.app.put(`/admins/:adminId`, [
            adminsMiddleware.validateRequiredAdminBodyFields,
            adminsMiddleware.validateSameEmailBelongToSameAdmin,
            adminsController.put,
        ]);

        this.app.patch(`/admins/:adminId`, [
            adminsMiddleware.validatePatchEmail,
            adminsController.patch,
        ]);


        return this.app
    }
}