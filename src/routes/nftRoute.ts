//create two routes for nft
//one for getting all nfts
//one to get one nft

import express from 'express'
import { getAllNFTs, getOneNFT } from '../controllers/nftController'

const router = express.Router()

router.get('/', getAllNFTs)
router.get('/:id', getOneNFT)

export default router