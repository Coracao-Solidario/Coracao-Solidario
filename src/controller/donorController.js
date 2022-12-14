const donorModel = require("../models/donorModel");

const findAllDonor = async (req, res) => {
  try {
    const allDonor = await donorModel.find();
    res.status(200).json(allDonor);
  } catch {
    Donor.log(error);
    res.status(500).json({ message: error.message });
  };
};

const findDonorById = async (req, res) => {
  try {
    const findDonor = await donorModel.findById(req.params.id);
    res.status(200).json(findDonor);
  } catch (error) {
    Donor.error(error);
    res.status(500).json({ message: error.message });
  };
};


const findDonorByAvailable = async (req, res) => {
  try {
    const findDonor = await donorModel.find({available:req.params.available});
      res.status(200).json(findDonor);  
  } catch (error) {
    Donor.error(error);
    res.status(500).json({ message: error.message});
  };
};

const addNewDonor = async (req, res) => {
  try {
    const {
      name,
      contact,
      drug,
      
    } = req.body;
    const newDonor = new donorModel({
      name,
      contact,
      drug,
      
    });

    const savedDonor = await newDonor.save();

    res.status(201).json({ message: "New Donor successfully added", savedDonor });
  } catch (error) {
    Donor.error(error);
    res.status(500).json(error.message);
  };
};

const updateDonor = async (req, res) => {
  try {
    const {
      name,
      contact,
      drug,
      
    } = req.body;
    const updateDonor = await donorModel.findByIdAndUpdate(req.params.id, {
      name,
      contact,
      drug,
      
    });

    res.status(200).json({ message: "Donor successfully updated", updateDonor });
  } catch (error) {
    Donor.error(error);
    res.status(500).json({ message: error.message });
  };
};

const deleteDonor = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteDonor = await donorModel.findByIdAndDelete(id);
    const message = `Donor with id ${deleteDonor.name} was successfully deleted`;
    res.status(200).json({ message });
  } catch (error){
    Donor.error(error);
    res.status(500).json({ message: error.message });
  };
};

module.exports = {
  findAllDonor,
  findDonorById,
  findDonorByAvailable,
  addNewDonor,
  updateDonor,
  deleteDonor,
};