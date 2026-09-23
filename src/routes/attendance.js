import express from "express";
import attendanceController from "../controller/attendance.controller.js";

const router = express.Router();

router.post("/checkin", attendanceController.checkIn);
router.put("/checkout/:id", attendanceController.checkOut);
router.get("/today", attendanceController.getTodayAttendance);

export default router;