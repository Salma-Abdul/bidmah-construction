import express from "express";
import authRoutes from "./src/routes/auth.js";
import roleRoutes from "./src/routes/role.js";
import usersRoutes from "./src/routes/users.js";
import attendanceRoutes from "./src/routes/attendance.js";
import projectsRoutes from "./src/routes/projects.js";
import materialsRoutes from "./src/routes/materials.js";
import expensesRoutes from "./src/routes/expenses.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Bidmah Construction API is running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/materials", materialsRoutes);
app.use("/api/expenses", expensesRoutes);

export default app;