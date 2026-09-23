import prisma from "../prisma.js";

const addMaterial = async (req, res) => {
  try {
    const { name, quantity, unit, projectId } = req.body;
    
    if (!name || !quantity) {
      return res.status(400).json({ message: "Name and quantity required" });
    }

    const material = await prisma.material.create({
      data: { name, quantity: parseFloat(quantity), unit, projectId }
    });

    return res.status(201).json({ message: "Material added", material });

  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Failed to add material" });
  }
};

const useMaterial = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantityUsed } = req.body;

    const material = await prisma.material.update({
      where: { id },
      data: { quantity: { decrement: parseFloat(quantityUsed) } }
    });

    return res.status(200).json({ message: "Material used", material });

  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Failed to use material" });
  }
};

const getLowStock = async (req, res) => {
  try {
    const lowStock = await prisma.material.findMany({
      where: { quantity: { lte: 10 } }
    });
    return res.status(200).json(lowStock);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Failed to get low stock" });
  }
};

const materialsController = {
  addMaterial,
  useMaterial,
  getLowStock
};

export default materialsController;
