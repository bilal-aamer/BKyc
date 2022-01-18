const express = require("express");

const { storeKyc,getKycsForVerification,storeKycOnIpfs,rejectKyc,scheduleAMeet } = require("../controller/kyc");

const router = express.Router();

// To accept multipart/form data 
const multer = require("multer");

router.post("/store-kyc-for-verification",multer().any(),storeKyc);

router.get("/get-unverified-kycs",getKycsForVerification);

router.post("/store-kyc-on-ipfs",storeKycOnIpfs);

router.post("/reject-kyc",rejectKyc);

router.post('/schedule-a-meet',scheduleAMeet);

module.exports = router;