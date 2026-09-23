// controllers/projectController.js

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getProjects = async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return res.status(200).json(projects);
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Failed to get projects",
    });
  }
};

const getProjectById = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        message: "Invalid project ID",
      });
    }

    const project = await prisma.project.findUnique({
      where: { id },
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    return res.status(200).json(project);
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Failed to get project",
    });
  }
};

const createProject = async (req, res) => {
  try {
    const {
      name,
      description,
      status,
      startDate,
      endDate,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Project name is required",
      });
    }

    const project = await prisma.project.create({
      data: {
        name,
        description,
        status,
        startDate: startDate ? new Date(startDate) : undefined,
        endDate: endDate ? new Date(endDate) : undefined,
      },
    });

    return res.status(201).json({
      message: "Project created successfully",
      project,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Failed to create project",
    });
  }
};

const updateProject = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        message: "Invalid project ID",
      });
    }

    const {
      name,
      description,
      status,
      startDate,
      endDate,
    } = req.body;

    const data = {};

    if (name !== undefined) {
      data.name = name;
    }

    if (description !== undefined) {
      data.description = description;
    }

    if (status !== undefined) {
      data.status = status;
    }

    if (startDate !== undefined) {
      data.startDate = new Date(startDate);
    }

    if (endDate !== undefined) {
      data.endDate = new Date(endDate);
    }

    const project = await prisma.project.update({
      where: { id },
      data,
    });

    return res.status(200).json({
      message: "Project updated successfully",
      project,
    });
  } catch (error) {
    console.error(error);

    if (error.code === "P2025") {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    return res.status(500).json({
      message: "Failed to update project",
    });
  }
};

const deleteProject = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        message: "Invalid project ID",
      });
    }

    await prisma.project.delete({
      where: { id },
    });

    return res.status(200).json({
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.log(error);

    if (error.code === "P2025") {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    return res.status(500).json({
      message: "Failed to delete project",
    });
  }
};

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};