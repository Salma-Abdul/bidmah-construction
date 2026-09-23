import express from "express";
import materialsController from "../controller/materials.controller.js";

const router = express.Router();

router.post("/", materialsController.addMaterial);
router.put("/:id/use", materialsController.useMaterial);
router.get("/low-stock", materialsController.getLowStock);

export default router;