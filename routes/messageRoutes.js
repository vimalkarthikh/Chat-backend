//router config

const messageRouter = require("express").Router();

//getting message controllers

const { getMessage } = require("../controllers/messageController");

messageRouter.get("/api/messages/:userId", getMessage);

module.exports = messageRouter;
