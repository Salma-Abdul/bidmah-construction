

const prisma = require("../src/lib/prisma");

const getAllExpenses = async () => {
  return await prisma.expense.findMany({
    orderBy: {
      date: "desc",
    },
  });
};

const getExpenseById = async (id) => {
  return await prisma.expense.findUnique({
    where: {
      id: Number(id),
    },
  });
};

const createExpense = async (data) => {
  return await prisma.expense.create({
    data,
  });
};

const updateExpense = async (id, data) => {
  return await prisma.expense.update({
    where: {
      id: Number(id),
    },
    data,
  });
};

const deleteExpense = async (id) => {
  return await prisma.expense.delete({
    where: {
      id: Number(id),
    },
  });
};

module.exports = {
  getAllExpenses,
  getExpenseById,
  createExpense,
  updateExpense,
  deleteExpense,
};