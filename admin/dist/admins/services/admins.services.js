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
const admin_dao_1 = __importDefault(require("../dao/admin.dao"));
class AdminServices {
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return admin_dao_1.default.addAdmin(resource);
        });
    }
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return admin_dao_1.default.getAdmins();
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return admin_dao_1.default.removeAdminById(id);
        });
    }
    ;
    patchById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return admin_dao_1.default.patchAdminById(id, resource);
        });
    }
    putById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return admin_dao_1.default.putAdminById(id, resource);
        });
    }
    readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return admin_dao_1.default.getAdminById(id);
        });
    }
    getAdminByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return admin_dao_1.default.getAdminByEmail(email);
        });
    }
}
exports.default = new AdminServices();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5zLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYWRtaW5zL3NlcnZpY2VzL2FkbWlucy5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUF3QztBQU14QyxNQUFNLGFBQWE7SUFDVCxNQUFNLENBQUMsUUFBd0I7O1lBQ2pDLE9BQU8sbUJBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsQ0FBQztLQUFBO0lBQ0ssSUFBSSxDQUFDLEtBQWEsRUFBRSxJQUFZOztZQUNsQyxPQUFPLG1CQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEMsQ0FBQztLQUFBO0lBQ0ssVUFBVSxDQUFDLEVBQVU7O1lBQ3ZCLE9BQU8sbUJBQVEsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBQUEsQ0FBQztJQUNJLFNBQVMsQ0FBQyxFQUFVLEVBQUUsUUFBdUI7O1lBQy9DLE9BQU8sbUJBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELENBQUM7S0FBQTtJQUNLLE9BQU8sQ0FBQyxFQUFVLEVBQUUsUUFBcUI7O1lBQzNDLE9BQU8sbUJBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLENBQUM7S0FBQTtJQUNLLFFBQVEsQ0FBQyxFQUFVOztZQUNyQixPQUFPLG1CQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7S0FBQTtJQUNLLGVBQWUsQ0FBQyxLQUFhOztZQUMvQixPQUFPLG1CQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxhQUFhLEVBQUUsQ0FBQyJ9