import express from 'express';
import adminsServices from '../services/admins.services';
import debug from 'debug';

const log: debug.IDebugger = debug('app:admins-controller');
class AdminsMiddleware {

    async validateRequiredAdminBodyFields(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        if (req.body && req.body.email && req.body.password) {
            next();
        }
        else {
            res.status(400).send({
                error: `Missing required fields email and password`,
            });
        }
    }
    async validateSameEmailDoesntExist(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const admin = await adminsServices.getAdminByEmail(req.body.email);
        if (admin) {
            res.status(400).send({ error: `Admin email already exists` });
        } else {
            next();
        }
    }

    async validateSameEmailBelongToSameAdmin(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const admin = await adminsServices.getAdminByEmail(req.body.email);
        if (admin && admin.id === req.params.adminId) {
            next();
        } else {
            res.status(400).send({ error: `Invalid email` });
        }
    }

    async validateAdminExists(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {

        const admin = await adminsServices.readById(req.params.adminId);
        if (admin) {
            next();
        } else {
            res.status(404).send({
                error: `Admin ${req.params.adminId} not found`,
            });
        }
    }

    // Here we need to use an arrow function to bind `this` correctly
    validatePatchEmail = async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        if (req.body.email) {
            log('Validating email', req.body.email);

            this.validateSameEmailBelongToSameAdmin(req, res, next);
        } else {
            next();
        }
    };

    async extractAdminId(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        req.body.id = req.params.adminId;
        next();
    }
}

export default new AdminsMiddleware();