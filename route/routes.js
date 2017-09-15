var patient = require('../models/patientSchema')
var controler = require('../controler/controler')

module.exports = (app) => {
  app.post('/api/createPatientProfile', controler.createPatientProfile)
  app.get('/api/getAllPatient', controler.getAllPatient)
}

