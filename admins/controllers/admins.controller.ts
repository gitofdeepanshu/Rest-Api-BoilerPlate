import express from "express";
import adminsServices from "../services/admins.services";
import argon2 from "argon2";
import debug from "debug";

const log: debug.IDebugger = debug('app:admins-controller');

class AdminsController {
    async listAdmins(req: express.Request, res: express.Response) {
        const admins = await adminsServices.list(100, 0);
        res.status(200).send(admins);
    }

    async createAdmins(req: express.Request, res: express.Response) {
        req.body.password = await argon2.hash(req.body.password);
        let admin = await adminsServices.create(req.body);
        res.status(201).send(admin);
    }
    async getAdminById(req: express.Request, res: express.Response) {
        let admin = await adminsServices.readById(req.body.id);
        res.status(200).send(admin);
    }
    async patch(req: express.Request, res: express.Response) {
        if (req.body.password) {
            req.body.password = await argon2.hash(req.body.password);
        }
        log(await adminsServices.patchById(req.body.id, req.body));
        res.status(204).send();
    }
    async put(req: express.Request, res: express.Response) {
        req.body.password = await argon2.hash(req.body.password);
        log(await adminsServices.putById(req.body.id, req.body));
        res.status(204).send();
    }

    async removeUser(req: express.Request, res: express.Response) {
        log(await adminsServices.deleteById(req.body.id));
        res.status(204).send();
    }
}

export default new AdminsController();