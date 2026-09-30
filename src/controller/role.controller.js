import prisma from "../lib/prisma.js";

const createRole = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Role name is required" });
    }

    const existing = await prisma.role.findUnique({
      where: { name }
    });

    if (existing) {
      return res.status(400).json({ message: "Role already exists" });
    }

    const role = await prisma.role.create({
      data: {
        name,
        description
      }
    });

    return res.status(201).json({ message: "Role created", role });

  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Failed to create role" });
  }
};

const getAllRoles = async (req, res) => {
  try {
    const roles = await prisma.role.findMany({
      include: { users: true }
    });
    return res.status(200).json(roles);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Failed to get roles" });
  }
};

const getRoleById = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await prisma.role.findUnique({
      where: { id: parseInt(id) },
      include: { users: true }
    });

    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }

    return res.status(200).json(role);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Failed to get role" });
  }
};

const updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const updated = await prisma.role.update({
      where: { id: parseInt(id) },
      data: { name, description }
    });

    return res.status(200).json({ message: "Role updated", updated });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Failed to update role" });
  }
};

const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.role.delete({
      where: { id: parseInt(id) }
    });

    return res.status(200).json({ message: "Role deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Failed to delete role" });
  }
};

const roleController = {
  createRole,
  getAllRoles,
  getRoleById,
  updateRole,
  deleteRole
};

export default roleController;