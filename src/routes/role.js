import express from "express";
import roleController from "../controller/role.controller.js";
// import authMiddleware from "../middleware/auth.js" // if you have it

const router = express.Router();

router.post("/", roleController.createRole);
router.get("/", roleController.getAllRoles);
router.get("/:id", roleController.getRoleById);
router.put("/:id", roleController.updateRole);
router.delete("/:id", roleController.deleteRole);

export default router;