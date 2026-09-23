

const prisma = require("../src/lib/prisma");

const getAllMaterials = async () => {
  return await prisma.material.findMany({
    orderBy: {
      id: "desc",
    },
  });
};

const getMaterialById = async (id) => {
  return await prisma.material.findUnique({
    where: {
      id: Number(id),
    },
  });
};

const createMaterial = async (data) => {
  return await prisma.material.create({
    data,
  });
};

const updateMaterial = async (id, data) => {
  return await prisma.material.update({
    where: {
      id: Number(id),
    },
    data,
  });
};

const deleteMaterial = async (id) => {
  return await prisma.material.delete({
    where: {
      id: Number(id),
    },
    data,
  });
};

module.exports = {
  getAllMaterials,
  getMaterialById,
  createMaterial,
  updateMaterial,
  deleteMaterial,
};