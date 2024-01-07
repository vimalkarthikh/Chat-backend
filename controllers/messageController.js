const Message = require("../models/messageModel");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");

// Confirm User
const getMessage = async (req, res) => {
  try {
    const { userId } = req.params;
    const token = req.cookies?.token;

    if (!token) {
      return res
        .status(400)
        .json({ message: "user not exists or link expired" });
    }
    const decodedToken = jwt.verify(token, JWT_SECRET);

    const ourUserId = decodedToken.userId;

    const messages = await Message.find({
      sender: { $in: [userId, ourUserId] },
      recipient: { $in: [userId, ourUserId] },
    }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getMessage,
};
