"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminsRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const admins_middleware_1 = __importDefault(require("./middleware/admins.middleware"));
const admins_controller_1 = __importDefault(require("./controllers/admins.controller"));
class AdminsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'AdminsRoutes');
    }
    configureRoutes() {
        this.app
            .route('/admins')
            .get(admins_controller_1.default.listAdmins)
            .post(admins_middleware_1.default.validateRequiredAdminBodyFields, admins_middleware_1.default.validateSameEmailDoesntExist, admins_controller_1.default.createAdmins);
        this.app.param(`adminId`, admins_middleware_1.default.extractAdminId);
        this.app.route(`/admins/:adminId`)
            .all(admins_middleware_1.default.validateAdminExists)
            .get(admins_controller_1.default.getAdminById)
            .delete(admins_controller_1.default.removeUser);
        this.app.put(`/admins/:adminId`, [
            admins_middleware_1.default.validateRequiredAdminBodyFields,
            admins_middleware_1.default.validateSameEmailBelongToSameAdmin,
            admins_controller_1.default.put,
        ]);
        this.app.patch(`/admins/:adminId`, [
            admins_middleware_1.default.validatePatchEmail,
            admins_controller_1.default.patch,
        ]);
        return this.app;
    }
}
exports.AdminsRoutes = AdminsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4ucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkbWlucy9hZG1pbi5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlFQUFvRTtBQUNwRSx1RkFBOEQ7QUFDOUQsd0ZBQStEO0FBRy9ELE1BQWEsWUFBYSxTQUFRLHlDQUFrQjtJQUNoRCxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNELGVBQWU7UUFDWCxJQUFJLENBQUMsR0FBRzthQUNILEtBQUssQ0FBQyxTQUFTLENBQUM7YUFDaEIsR0FBRyxDQUFDLDJCQUFnQixDQUFDLFVBQVUsQ0FBQzthQUNoQyxJQUFJLENBQ0QsMkJBQWdCLENBQUMsK0JBQStCLEVBQ2hELDJCQUFnQixDQUFDLDRCQUE0QixFQUM3QywyQkFBZ0IsQ0FBQyxZQUFZLENBQ2hDLENBQUM7UUFFTixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsMkJBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7YUFDN0IsR0FBRyxDQUFDLDJCQUFnQixDQUFDLG1CQUFtQixDQUFDO2FBQ3pDLEdBQUcsQ0FBQywyQkFBZ0IsQ0FBQyxZQUFZLENBQUM7YUFDbEMsTUFBTSxDQUFDLDJCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFO1lBQzdCLDJCQUFnQixDQUFDLCtCQUErQjtZQUNoRCwyQkFBZ0IsQ0FBQyxrQ0FBa0M7WUFDbkQsMkJBQWdCLENBQUMsR0FBRztTQUN2QixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRTtZQUMvQiwyQkFBZ0IsQ0FBQyxrQkFBa0I7WUFDbkMsMkJBQWdCLENBQUMsS0FBSztTQUN6QixDQUFDLENBQUM7UUFHSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUE7SUFDbkIsQ0FBQztDQUNKO0FBbENELG9DQWtDQyJ9