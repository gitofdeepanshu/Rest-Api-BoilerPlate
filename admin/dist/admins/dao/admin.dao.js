"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shortid_1 = __importDefault(require("shortid"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:in-memory-dao');
class AdminDao {
    constructor() {
        this.admins = [];
        log("Created new instance of Admin Dao");
    }
    addAdmin(admin) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = shortid_1.default.generate();
            admin.id = id;
            admin.permissionLevel = 1;
            this.admins.push(admin);
            return `created new admins with id : ${admin.id}`;
        });
    }
    ;
    getAdmins() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.admins;
        });
    }
    getAdminById(adminId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.admins.find((admin) => admin.id === adminId);
        });
    }
    getAdminByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.admins.find((admin) => admin.email === email);
        });
    }
    putAdminById(id, admin) {
        return __awaiter(this, void 0, void 0, function* () {
            let admin_index = this.admins.findIndex((admin) => admin.id === id);
            this.admins.splice(admin_index, 1, admin);
            return `${id} updated via put`;
        });
    }
    patchAdminById(id, admin) {
        return __awaiter(this, void 0, void 0, function* () {
            let admin_index = this.admins.findIndex((admin) => admin.id === id);
            let currentAdmin = this.admins[admin_index];
            let allowedPatchFileds = [
                'password',
                'firstName',
                'lastName',
            ];
            for (let field of allowedPatchFileds) {
                if (field in currentAdmin) {
                    // @ts-ignore
                    currentAdmin[field] = admin[field];
                }
            }
            this.admins.splice(admin_index, 1, currentAdmin);
            return `${admin.id} patched`;
        });
    }
    removeAdminById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let admin_index = this.admins.findIndex((admin) => admin.id === id);
            this.admins.splice(admin_index, 1);
            return `${id} removed`;
        });
    }
}
exports.default = new AdminDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYWRtaW5zL2Rhby9hZG1pbi5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFJQSxzREFBOEI7QUFDOUIsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRXhELE1BQU0sUUFBUTtJQUdWO1FBRkEsV0FBTSxHQUEwQixFQUFFLENBQUM7UUFHL0IsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVLLFFBQVEsQ0FBQyxLQUFxQjs7WUFDaEMsSUFBSSxFQUFFLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM1QixLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNkLEtBQUssQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXhCLE9BQU8sZ0NBQWdDLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQTtRQUNyRCxDQUFDO0tBQUE7SUFBQSxDQUFDO0lBR0ksU0FBUzs7WUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQztLQUFBO0lBQ0ssWUFBWSxDQUFDLE9BQWU7O1lBQzlCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssT0FBTyxDQUFDLENBQUE7UUFDNUQsQ0FBQztLQUFBO0lBRUssZUFBZSxDQUFDLEtBQWE7O1lBQy9CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUE7UUFDN0QsQ0FBQztLQUFBO0lBRUssWUFBWSxDQUFDLEVBQVUsRUFBRSxLQUFrQjs7WUFDN0MsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMxQyxPQUFPLEdBQUcsRUFBRSxrQkFBa0IsQ0FBQztRQUNuQyxDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsRUFBVSxFQUFFLEtBQW9COztZQUNqRCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNwRSxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRTVDLElBQUksa0JBQWtCLEdBQUc7Z0JBQ3JCLFVBQVU7Z0JBQ1YsV0FBVztnQkFDWCxVQUFVO2FBQ2IsQ0FBQTtZQUVELEtBQUssSUFBSSxLQUFLLElBQUksa0JBQWtCLEVBQUU7Z0JBQ2xDLElBQUksS0FBSyxJQUFJLFlBQVksRUFBRTtvQkFDdkIsYUFBYTtvQkFDYixZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN0QzthQUNKO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUNqRCxPQUFPLEdBQUcsS0FBSyxDQUFDLEVBQUUsVUFBVSxDQUFDO1FBQ2pDLENBQUM7S0FBQTtJQUVLLGVBQWUsQ0FBQyxFQUFVOztZQUM1QixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkMsT0FBTyxHQUFHLEVBQUUsVUFBVSxDQUFDO1FBQzNCLENBQUM7S0FBQTtDQUVKO0FBRUQsa0JBQWUsSUFBSSxRQUFRLEVBQUUsQ0FBQyJ9