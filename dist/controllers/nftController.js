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
exports.getOneNFT = exports.getAllNFTs = void 0;
const client_1 = require("@prisma/client");
const fs_1 = __importDefault(require("fs"));
const prisma = new client_1.PrismaClient();
const getAllNFTs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nfts = yield prisma.nft.findMany();
    res.send(nfts);
});
exports.getAllNFTs = getAllNFTs;
const getOneNFT = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const nft = yield prisma.nft.findUnique({
        where: {
            id: Number(id),
        },
    });
    if (!nft)
        return res.status(404).send("NFT not found");
    //get nft metadata from nft folder and add it to the response
    const metadata = fs_1.default.readFileSync(`nft/${id}.json`, "utf-8");
    const parsedMetadata = JSON.parse(metadata);
    res.send({ nft, parsedMetadata });
});
exports.getOneNFT = getOneNFT;
//# sourceMappingURL=nftController.js.map