const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const StartUp = new Schema({

  companyName: String,
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
  industry: String,
  stage: String,
  foundation: Boolean,
  teamMembers: Number,
  skillsAvailable: [String],
  skillsComplete: Boolean,
  skillsNeeded: [String],
  inPortfolio: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Investor'
    }
  ],
  experience: Boolean,
  location: String,
  pitchDeck: [String]
  
});

const StartUp = model("StartUp", startUpSchema);

module.exports = StartUp; 
