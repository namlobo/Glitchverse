const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    //takes 3 arguments = req, response and next
  const authHeader = req.headers.authorization;
//this reads the authorization header from the incoming req
//expected format is Authorization : Bearer <token>


  // Check if Authorization header exists and starts with Bearer 
  //if it doesnt we immediately reject the request
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }
  //

  const token = authHeader.split(" ")[1]; // Extract the token

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //verifies the token using JWT secret in .env file
    req.user = decoded; // Attach user info to request
    next(); // Move to next middleware or route
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

module.exports = authMiddleware;
