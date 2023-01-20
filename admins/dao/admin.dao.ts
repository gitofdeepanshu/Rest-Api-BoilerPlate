import { CreateAdminDto } from '../dto/create.admin.dto';
import { PatchAdminDto } from '../dto/patch.admin.dto';
import { PutAdminDto } from '../dto/put.admin.dto';

import shortid from 'shortid';
import debug from 'debug';

const log: debug.IDebugger = debug('app:in-memory-dao');

class AdminDao {
    admins: Array<CreateAdminDto> = [];

    constructor() {
        log("Created new instance of Admin Dao");
    }

    async addAdmin(admin: CreateAdminDto) {
        let id = shortid.generate();
        admin.id = id;
        admin.permissionLevel = 1;
        this.admins.push(admin);

        return `created new admins with id : ${admin.id}`
    };


    async getAdmins() {
        return this.admins;
    }
    async getAdminById(adminId: string) {
        return this.admins.find((admin) => admin.id === adminId)
    }

    async getAdminByEmail(email: string) {
        return this.admins.find((admin) => admin.email === email)
    }

    async putAdminById(id: string, admin: PutAdminDto) {
        let admin_index = this.admins.findIndex((admin) => admin.id === id);
        this.admins.splice(admin_index, 1, admin);
        return `${id} updated via put`;
    }

    async patchAdminById(id: string, admin: PatchAdminDto) {
        let admin_index = this.admins.findIndex((admin) => admin.id === id);
        let currentAdmin = this.admins[admin_index];

        let allowedPatchFileds = [
            'password',
            'firstName',
            'lastName',
        ]

        for (let field of allowedPatchFileds) {
            if (field in currentAdmin) {
                // @ts-ignore
                currentAdmin[field] = admin[field];
            }
        }
        this.admins.splice(admin_index, 1, currentAdmin);
        return `${admin.id} patched`;
    }

    async removeAdminById(id: string) {
        let admin_index = this.admins.findIndex((admin) => admin.id === id);
        this.admins.splice(admin_index, 1);
        return `${id} removed`;
    }

}

export default new AdminDao();