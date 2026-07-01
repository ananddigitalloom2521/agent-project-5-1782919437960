const mongoose = require('mongoose');
const User = require('./User');
const VacationRequest = require('./VacationRequest');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = { User, VacationRequest };