const mongoose = require('mongoose');
const vacationRequestSchema = new mongoose.Schema({
  id: String,
  userId: String,
  startDate: Date,
  endDate: Date,
  status: String
});

module.exports = mongoose.model('VacationRequest', vacationRequestSchema);