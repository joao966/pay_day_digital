require('dotenv').config();
const jwt = require('jsonwebtoken');

const {JTW_SECRET} = process.env;

const validateToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'missing auth token' });
    
    const tokenIsValid = jwt.verify(token, JTW_SECRET);
  
    req.userId = tokenIsValid;

    if (!tokenIsValid) {
      return res.status(401).json({ message: 'jwt malformed' });
    }
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'jwt malformed' }); 
  }
};

module.exports = {
  validateToken,
};
