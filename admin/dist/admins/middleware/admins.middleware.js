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
const admins_services_1 = __importDefault(require("../services/admins.services"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:admins-controller');
class AdminsMiddleware {
    constructor() {
        // Here we need to use an arrow function to bind `this` correctly
        this.validatePatchEmail = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            if (req.body.email) {
                log('Validating email', req.body.email);
                this.validateSameEmailBelongToSameAdmin(req, res, next);
            }
            else {
                next();
            }
        });
    }
    validateRequiredAdminBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && req.body.email && req.body.password) {
                next();
            }
            else {
                res.status(400).send({
                    error: `Missing required fields email and password`,
                });
            }
        });
    }
    validateSameEmailDoesntExist(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const admin = yield admins_services_1.default.getAdminByEmail(req.body.email);
            if (admin) {
                res.status(400).send({ error: `Admin email already exists` });
            }
            else {
                next();
            }
        });
    }
    validateSameEmailBelongToSameAdmin(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const admin = yield admins_services_1.default.getAdminByEmail(req.body.email);
            if (admin && admin.id === req.params.adminId) {
                next();
            }
            else {
                res.status(400).send({ error: `Invalid email` });
            }
        });
    }
    validateAdminExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const admin = yield admins_services_1.default.readById(req.params.adminId);
            if (admin) {
                next();
            }
            else {
                res.status(404).send({
                    error: `Admin ${req.params.adminId} not found`,
                });
            }
        });
    }
    extractAdminId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.id = req.params.adminId;
            next();
        });
    }
}
exports.default = new AdminsMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5zLm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9hZG1pbnMvbWlkZGxld2FyZS9hZG1pbnMubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtGQUF5RDtBQUN6RCxrREFBMEI7QUFFMUIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDNUQsTUFBTSxnQkFBZ0I7SUFBdEI7UUEwREksaUVBQWlFO1FBQ2pFLHVCQUFrQixHQUFHLENBQ2pCLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCLEVBQzVCLEVBQUU7WUFDQSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNoQixHQUFHLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFeEMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDM0Q7aUJBQU07Z0JBQ0gsSUFBSSxFQUFFLENBQUM7YUFDVjtRQUNMLENBQUMsQ0FBQSxDQUFDO0lBVU4sQ0FBQztJQS9FUywrQkFBK0IsQ0FDakMsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEI7O1lBRTFCLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakQsSUFBSSxFQUFFLENBQUM7YUFDVjtpQkFDSTtnQkFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDakIsS0FBSyxFQUFFLDRDQUE0QztpQkFDdEQsQ0FBQyxDQUFDO2FBQ047UUFDTCxDQUFDO0tBQUE7SUFDSyw0QkFBNEIsQ0FDOUIsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEI7O1lBRTFCLE1BQU0sS0FBSyxHQUFHLE1BQU0seUJBQWMsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuRSxJQUFJLEtBQUssRUFBRTtnQkFDUCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSw0QkFBNEIsRUFBRSxDQUFDLENBQUM7YUFDakU7aUJBQU07Z0JBQ0gsSUFBSSxFQUFFLENBQUM7YUFDVjtRQUNMLENBQUM7S0FBQTtJQUVLLGtDQUFrQyxDQUNwQyxHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFMUIsTUFBTSxLQUFLLEdBQUcsTUFBTSx5QkFBYyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25FLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7Z0JBQzFDLElBQUksRUFBRSxDQUFDO2FBQ1Y7aUJBQU07Z0JBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQzthQUNwRDtRQUNMLENBQUM7S0FBQTtJQUVLLG1CQUFtQixDQUNyQixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFHMUIsTUFBTSxLQUFLLEdBQUcsTUFBTSx5QkFBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hFLElBQUksS0FBSyxFQUFFO2dCQUNQLElBQUksRUFBRSxDQUFDO2FBQ1Y7aUJBQU07Z0JBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLEtBQUssRUFBRSxTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxZQUFZO2lCQUNqRCxDQUFDLENBQUM7YUFDTjtRQUNMLENBQUM7S0FBQTtJQWlCSyxjQUFjLENBQ2hCLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUUxQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNqQyxJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDIn0=