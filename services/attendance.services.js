

const prisma = require("../src/lib/prisma");

const getAllAttendance = async () => {
  return await prisma.attendance.findMany({
    orderBy: {
      date: "desc",
    },
  });
};

const getAttendanceById = async (id) => {
  return await prisma.attendance.findUnique({
    where: {
      id: Number(id),
    },
  });
};

const createAttendance = async (data) => {
  return await prisma.attendance.create({
    data,
  });
};

const updateAttendance = async (id, data) => {
  return await prisma.attendance.update({
    where: {
      id: Number(id),
    },
    data,
  });
};

const deleteAttendance = async (id) => {
  return await prisma.attendance.delete({
    where: {
      id: Number(id),
    },
  });
};

module.exports = {
  getAllAttendance,
  getAttendanceById,
  createAttendance,
  updateAttendance,
  deleteAttendance,
};