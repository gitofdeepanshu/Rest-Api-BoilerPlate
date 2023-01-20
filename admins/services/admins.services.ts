import adminDao from "../dao/admin.dao";
import { PatchAdminDto } from "../dto/patch.admin.dto";
import { PutAdminDto } from "../dto/put.admin.dto";
import { CreateAdminDto } from "../dto/create.admin.dto";
import { CRUD } from "../../common/interfaces/crud.interface";

class AdminServices implements CRUD {
    async create(resource: CreateAdminDto) {
        return adminDao.addAdmin(resource);
    }
    async list(limit: number, page: number) {
        return adminDao.getAdmins();
    }
    async deleteById(id: string) {
        return adminDao.removeAdminById(id);
    };
    async patchById(id: string, resource: PatchAdminDto) {
        return adminDao.patchAdminById(id, resource);
    }
    async putById(id: string, resource: PutAdminDto) {
        return adminDao.putAdminById(id, resource);
    }
    async readById(id: string) {
        return adminDao.getAdminById(id);
    }
    async getAdminByEmail(email: string) {
        return adminDao.getAdminByEmail(email);
    }
}

export default new AdminServices();