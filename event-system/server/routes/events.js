const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  phone: String,
});

const Participant = mongoose.model("Participant", participantSchema);

router.post("/events", async (req, res) => {
  let newEntry = {
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    phone: req.body.phone,
  };

  const newPerson = new Participant(newEntry);

  await newPerson.save();

  res.send({ id: newPerson.id }).status(200);
});

router.delete("/events/:id", async (req, res) => {
  console.log(req.params);
  await Participant.deleteOne({ _id: req.params.id });
  res.send({}).status(200);
});

module.exports = router;
