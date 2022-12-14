const mongoose = require ("mongoose");
const { schema } = require("./donorModel");
const patientSchema =  new mongoose.Schema(
    {
        _id:{
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId 
        },
       name: {
        type: String,
        required: true,
        unique: true
       },
      contact:{
        type: String,
        required: true
       },

       drug:{
        type: String,
        required: true,
        ref: "drug"
       },
    },
    {
        timesTamp: true
    }
);

const Model = mongoose.model("Patient",patientSchema)

module.exports = Model