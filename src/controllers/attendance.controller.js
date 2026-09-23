import prisma from "../prisma.js";

const checkIn = async (req, res) => {
  try {
    const { projectId, latitude, longitude } = req.body;
    
    if (!projectId) {
      return res.status(400).json({ message: "Project ID required" });
    }

    const attendance = await prisma.attendance.create({
      data: {
        userId: req.user.userId,
        projectId,
        checkIn: new Date(),
        checkInLat: latitude,
        checkInLng: longitude,
        status: "present"
      }
    });

    return res.status(201).json({ message: "Check-in successful", attendance });

  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Check-in failed" });
  }
};

const checkOut = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await prisma.attendance.update({
      where: { id },
      data: { checkOut: new Date() }
    });
    return res.status(200).json({ message: "Check-out successful", updated });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Check-out failed" });
  }
};

const getTodayAttendance = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0,0,0,0);
    const list = await prisma.attendance.findMany({
      where: { createdAt: { gte: today } },
      include: { user: true }
    });
    return res.status(200).json(list);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Failed to get attendance" });
  }
};

const attendanceController = {
  checkIn,
  checkOut,
  getTodayAttendance
};

export default attendanceController;