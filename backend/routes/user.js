const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { User } = require("../db");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("./middleware");

const router = express.Router();

// Input Validation

const signUpRequestBody = zod.object({
  username: zod.string().email(),
  password: zod.string().password().min(6),
  firstName: zod.string().max(50),
  lastName: zod.string().max(50),
});

// Sign-up route
router.post("/signup", async (req, res) => {
  try {
    const { success } = signUpRequestBody.safeParse(req.body);
    if (!success) {
      res.status(411).json({
        message: "Incorrect inputs",
      });
    } else {
      const dbResult = await User.find({ username: req.body.username });
      if (dbResult) {
        res.status(411).json({
          message: "Email already taken",
        });
      } else {
        const user = await User.create({
          username: req.body.username,
          password: req.body.password,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
        });
        const userId = user._id;
        const token = jwt.sign({ userId }, JWT_SECRET);

        res.status(200).json({
          message: "User created successfully",
          userId: token,
        });
      }
    }
  } catch (e) {
    console.log("Error in /signup", e);
    res.status(500).json({
      message: "Internal Error Signup",
    });
  }
});

//Sign-in route
router.post("/signin", async (req, res) => {
  try {
    const { success } = signUpRequestBody.safeParse(req.body);
    if (!success) {
      res.status(411).json({
        message: "Invalid inputs",
      });
    } else {
      const { username, password } = req.body;
      const dbResult = await User.findOne({ username, password });
      if (!dbResult) {
        res.status(411).json({
          message: "Error while loggin in",
        });
      } else {
        const token = jwt.sign({ userId: dbResult._id }, JWT_SECRET);
        res.status(200).json({
          token,
        });
      }
    }
  } catch (e) {
    console.log("Error in signin", e);
    res.status(500).json({
      message: "Internal error Signin",
    });
  }
});

// Update User info
const updateUserInfoReqBody = zod.object({
  password: zod.password().min(6).optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});
router.put("/user", authMiddleware, async (req, res) => {
  try {
    const { success } = updateUserInfoReqBody.safeParse(req.body);
    if (!success) {
      res.status(411).json({
        message: "Input validation failed",
      });
    } else {
      await User.updateOne({ _id: req.userId }, req.body);
      res.status(200).json({
        message: "Updated Successfully",
      });
    }
  } catch (e) {
    console.log("Internal Error /user PUT", e);
    res.status(500).json({
      message: "Internal Error /user PUT",
    });
  }
});

// Get all users
router.get("user/bulk/", async (req, res) => {
  try {
    const filter = req.query.filter || "";
    const users = await User.find({
      $or: [
        {
          firstName: {
            $regex: filter,
          },
        },
        {
          lastName: {
            $regex: filter,
          },
        },
      ],
    });
    res.status(200).json({
      user: users.map((user) => ({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        _id: user._id,
      })),
    });
  } catch (e) {
    console.log("Internal Error GET /user/bulk", e);
    res.status(500).json({
      message: "Internal Error GET /user/bulk",
    });
  }
});

module.exports = router;
