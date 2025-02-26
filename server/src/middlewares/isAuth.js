import jwt from "jsonwebtoken";
import "dotenv/config";

const isAuth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(400).json({
      success: false,
      message: "You are not authorized, plase login",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decoded.id) {
      req.body.userId = decoded.id;
    } else {
      return res.status(400).json({
        succes: false,
        message: "your are not authorized, plase login again",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default isAuth;
