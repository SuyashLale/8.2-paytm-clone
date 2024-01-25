const express = require("express");
const { Account, User } = require("../db");
const { authMiddleware } = require("./middleware");

const router = express.Router();

// GET Balance for user
router.get("/balance", authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;
    const dbResult = await Account.findOne({
      userId,
    });
    return res.status(200).json({
      balance: dbResult.balance,
    });
  } catch (e) {
    console.log("Internal Error GET /balance", e);
    res.status(500).json({
      message: "Internal Error GET /balance",
    });
  }
});

// POST transfer money to another account
router.post("/transfer", authMiddleware, async (req, res) => {
  try {
    const { to, amount } = req.body;
    const fromAccount = Account.findOne({ userId: req.userId });
    if (fromAccount.balance < amount) {
      return res.status(400).json({
        message: "Insufficient funds",
      });
    } else {
      const toAccount = Account.findOne({ userId: to });
      if (!toAccount) {
        return res.status(400).json({
          message: "Invalid account",
        });
      }
      await fromAccount.updateOne(
        { userId: req.userId },
        {
          $inc: {
            balance: -amount,
          },
        }
      );
      await toAccount.updateOne(
        { userId: to },
        {
          $inc: {
            balance: amount,
          },
        }
      );
    }
  } catch (e) {
    console.log("Internal Error POST /transfer", e);
    res.status(500).json({
      message: "Internal Error POST /transfer",
    });
  }
});

module.exports = router;
