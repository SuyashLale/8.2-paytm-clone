import { JWT_SECRET } from "../config";

const jwt = require("jsonwebtoken");

export async function authMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(403).json({
        message: "Problem with the JWT Token",
      });
      return;
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (e) {
    console.log("Error in Auth MW", e);
    res.status(403).json({
      message: "Invalid credentials",
    });
  }
}
