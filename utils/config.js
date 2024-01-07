const URL = process.env.MONGO_URI;
const PORT = process.env.PORT;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const JWT_SECRET = process.env.JWT_SECRET;
const BEURL = process.env.BEURL;
const FRONTEND_URL = process.env.FRONTEND_URL;

module.exports = {
  URL,
  PORT,
  EMAIL_USER,
  EMAIL_PASS,
  JWT_SECRET,
  BEURL,
  FRONTEND_URL,
};
