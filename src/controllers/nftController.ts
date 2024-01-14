import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import fs from "fs";

const prisma = new PrismaClient();

export const getAllNFTs = async (req: Request, res: Response) => {
  const nfts = await prisma.nft.findMany();
  // get all nft metadata from nft folder and add it to the response

  let nftsWithMetadata: any[] = [];
  for (let i = 0; i < nfts.length; i++) {
    const metadata = fs.readFileSync(`nft/${i + 1}.json`, "utf-8");
    const parsedMetadata = JSON.parse(metadata);
    const nftWithMetadata = { nft: nfts[i], metadata: parsedMetadata };
    nftsWithMetadata.push(nftWithMetadata);
  }

  if (nfts.length === 0) return res.status(404).send("NFTs not found");

  res.send(nftsWithMetadata);
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
