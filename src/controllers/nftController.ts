import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import fs from "fs";

const prisma = new PrismaClient();

export const getAllNFTs = async (req: Request, res: Response) => {
  const nfts = await prisma.nft.findMany();
  res.send(nfts);
};

export const getOneNFT = async (req: Request, res: Response) => {
  const { id } = req.params;
  const nft = await prisma.nft.findUnique({
    where: {
      id: Number(id),
    },
  });
  if (!nft) return res.status(404).send("NFT not found");
  //get nft metadata from nft folder and add it to the response
  const metadata = fs.readFileSync(`nft/${id}.json`, "utf-8");
  const parsedMetadata = JSON.parse(metadata);

  res.send({ nft, parsedMetadata });
};
