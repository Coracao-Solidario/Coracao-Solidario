const mongoose = require ("mongoose");

const donorSchema = new mongoose.Schema(
    {
      _id:{
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
      },
      name:{
        type: String,
        require: true,
        unique: true
      },
      contact:{
        type: String,
        require: true,
      },
      drug:{
        type: String,
        require: true
      },
    },
    {timestamp:true},
);

const Model = mongoose.model("Donor",donorSchema)

module.exports = Model