import express from "express";
import * as consistencyController from "../controllers/consistency.controller";

const router = express.Router();

router.get("/", consistencyController.consistencyCheck);

export default router;
