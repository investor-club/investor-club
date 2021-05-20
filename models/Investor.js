const { Schema, model} = require("mongoose");

const investorSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: String,
  firstName: String,
  lastName: String,
  industry: String,
  inPortfolio: [
    {
      type: Schema.Types.ObjectId,
      ref: 'StartUp'
    }
  ],
  favourites: [
    {
      type: Schema.Types.ObjectId,
      ref: 'StartUp'
    }
  ],
  bio: String,
  location: String,
  imageUrl: String,
  imageName: String,
  imageDescription: String,
  interest: String,
  
});

const Investor = model("Investor", investorSchema);

module.exports = Investor;