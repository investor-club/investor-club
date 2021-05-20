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
  foundation: Boolean,  
  teamMembers: String, //for rating: 1 or 5 => 0, 2,3,4 => 1
  skillsI: [String], // for ratingL 1 for each
  skillsII: String, // for rating: 1 for yes
  skillsIII: [String],
  inPortfolio: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Investor'
    }
  ],
  experience: Boolean,
  pitchDeck: [String],
  rating: Number,
  website: String,
  
  // imageUrl: { type: String, required: true },
});

const StartUp = model("StartUp", startUpSchema);

module.exports = StartUp; 
