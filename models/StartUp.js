const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const startUpSchema = new Schema({

  companyName: String,
  statement: String,
  description: String,
  email: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
  },
  password: String,
  dateRegistered: String,
  place: String,
  industry: String,
  stage: String,
  foundation: String,
  teamMembers: String,
  skillsI: [String],
  skillsII: String,
  skillsIII: [String],
  inPortfolio: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Investor'
    }
  ],
  experience: String,
  pitchDeck: String,
  rating: Number,
  website: String,
  // imageUrl: String,
});

const StartUp = model("StartUp", startUpSchema);

module.exports = StartUp; 
