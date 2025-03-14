import jwt from "jsonwebtoken";
import "dotenv/config";

const isAuth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.json({
      success: false,
      message: "You are not authorized, plase login",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decoded.id) {
      req.userId = decoded.id;
    } else {
      return res.json({
        succes: false,
        message: "your are not authorized, plase login again",
      });
    }
    next();
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export default isAuth;
