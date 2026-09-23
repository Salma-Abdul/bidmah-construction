import prisma from "../prisma.js";

const createExpense = async (req, res) => {
  try {
    const { projectId, amount, category, description, supplier } = req.body;
    
    if (!projectId || !amount) {
      return res.status(400).json({ message: "Project and amount required" });
    }

    const expense = await prisma.expense.create({
      data: {
        projectId,
        amount: parseFloat(amount),
        category,
        description,
        supplier,
        createdById: req.user.userId,
        status: "pending"
      }
    });

    return res.status(201).json({ message: "Expense created, waiting approval", expense });

  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Expense creation failed" });
  }
};

const approveExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const approved = await prisma.expense.update({
      where: { id },
      data: { status: "approved", approvedById: req.user.userId, approvedAt: new Date() }
    });
    return res.status(200).json({ message: "Expense approved", approved });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Approval failed" });
  }
};

const getPendingExpenses = async (req, res) => {
  try {
    const pending = await prisma.expense.findMany({
      where: { status: "pending" },
      orderBy: { createdAt: "desc" }
    });
    return res.status(200).json(pending);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Failed to get expenses" });
  }
};

const expensesController = {
  createExpense,
  approveExpense,
  getPendingExpenses
};

export default expensesController;