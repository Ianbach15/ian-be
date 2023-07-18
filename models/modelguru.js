const mongoose = require('mongoose');

// Define the schema for the Guru collection
const guruSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true
  },
  umur: {
    type: Number,
    required: true
  },
  jabatan: {
    type: String,
    required: true
  }
});

// Create the Guru model using the schema
const Guru = mongoose.model('Guru', guruSchema);

// Export the Guru model
module.exports = Guru;
