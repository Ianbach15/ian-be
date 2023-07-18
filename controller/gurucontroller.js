const Guru = require('../models/modelguru');

// Create a new Guru document
const createGuru = async (req, res) => {
  try {
    const { nama, umur, jabatan } = req.body;
    const newGuru = new Guru({ nama, umur, jabatan });
    const savedGuru = await newGuru.save();
    res.status(201).json(savedGuru);
  } catch (error) {
    console.error('Error creating Guru:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Retrieve all Guru documents
const getAllGurus = async (req, res) => {
  try {
    const gurus = await Guru.find();
    res.json(gurus);
  } catch (error) {
    console.error('Error retrieving Gurus:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Retrieve a single Guru document by ID
const getGuruById = async (req, res) => {
  try {
    const { id } = req.params;
    const guru = await Guru.findById(id);
    if (!guru) {
      return res.status(404).json({ error: 'Guru not found' });
    }
    res.json(guru);
  } catch (error) {
    console.error('Error retrieving Guru:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Update a Guru document by ID
const updateGuru = async (req, res) => {
  try {
    const { id } = req.params;
    const { nama, umur, jabatan } = req.body;
    const updatedGuru = await Guru.findByIdAndUpdate(id, { nama, umur, jabatan }, { new: true });
    if (!updatedGuru) {
      return res.status(404).json({ error: 'Guru not found' });
    }
    res.json(updatedGuru);
  } catch (error) {
    console.error('Error updating Guru:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Delete a Guru document by ID
const deleteGuru = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedGuru = await Guru.findByIdAndDelete(id);
    if (!deletedGuru) {
      return res.status(404).json({ error: 'Guru not found' });
    }
    res.json({ message: 'Guru deleted successfully' });
  } catch (error) {
    console.error('Error deleting Guru:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = {
  createGuru,
  getAllGurus,
  getGuruById,
  updateGuru,
  deleteGuru
};
