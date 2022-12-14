const patientModel = require("../models/patientModel");
const donorModel = require("../models/donorModel");

const findAllPatient = async (req, res) => {
    try {
      const allPatient = await patientModel.find();
      res.status(200).json(allPatient);
    } catch {
      res.status(500).json({ message: error.message });
    };
  };

  const findPatientById = async (req, res) => {
    try {
      const findPatient = await patientModel.findById(req.params.id)
      if (findPatient == null) {
        res.status(404).json({ message: "Patient not available" });
      }
      res.status(200).json(findPatient);
    } catch (error) {
      res.status(500).json({ message: error.message });
    };
  };


  const findPatientByName = async (req, res) => {
    try {
      const findPatient = await patientModel.find({name:req.params.name});
      res.status(200).json(findPatient); 
    } catch (error) {
      res.status(500).json({ message: error.message });
    };
  };



  const addNewPatient = async (req, res) => {
    try {
      const {
        name,
        contact,
        drug

      } = req.body;
  
      if (!drug) {
        return res
          .status(400)
          .json({ message: "Required: Enter the patient id." });
      };
  
      const findDonor = await donorModel.find({drug:req.body.drug});
  
      if (!findDonor) {
        return res.status(404).json({ message: "Patient not found" });
      };
  
      const newPatient = new patientModel({
        drug,
        name,
        contact,
        
      });
      const savedPatient = await newPatient.save();
      res
        .status(200)
        .json({ message: "New patient added successfully!", savedPatient ,findDonor});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    };
  };

const updatePatient = async (req, res) => {
  try {
    const {
      name,
      contact,
      drug,
      
    } = req.body;
    const updatePatients = await patientModel.findByIdAndUpdate(req.params.id, {
      name,
      contact,
      drug,
      
    });

    res.status(200).json({ message: "Patient successfully updated", updatePatients });
  } catch (error) {
    Donor.error(error);
    res.status(500).json({ message: error.message });
  };
};


const deletePatient = async (req, res) => {
    try {
      const { id } = req.params;
      const findPatients = await patientModel.findById(id);
  
      if (findPatients == null) {
        return res.status(404).json({ message: `Patient with id ${id} not found` })
      };
      await findPatients.remove();
      res.status(200).json({ message: `Patient with id ${id} was successfully deleted` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    };
  };

  module.exports = {
    findAllPatient,
    findPatientById,
    findPatientByName,
    addNewPatient,
    updatePatient,
    deletePatient,
  }