"use strict";
//create two routes for nft
//one for getting all nfts
//one to get one nft
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const nftController_1 = require("../controllers/nftController");
const router = express_1.default.Router();
router.get('/', nftController_1.getAllNFTs);
router.get('/:id', nftController_1.getOneNFT);
exports.default = router;
//# sourceMappingURL=nftRoute.js.map