const express = require("express");
const Employee = require("../models/Employee");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Create Employee
router.post("/", authMiddleware,async (req, res) => {
  try {
    const employee = new Employee(req.body);

    await employee.save();

    res.status(201).json(employee);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// Get All Employees
router.get("/",  authMiddleware,async (req, res) => {
  try {
    const employees = await Employee.find();

    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get Employee By ID
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee Not Found",
      });
    }

    res.status(200).json(employee);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
// Update Employee
router.put("/:id",  authMiddleware,async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(employee);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});
router.delete("/:id",  authMiddleware,async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(
      req.params.id
    );

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.json({
      message: "Employee deleted successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});
module.exports = router;