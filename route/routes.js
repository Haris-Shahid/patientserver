var patient = require('../models/patientSchema')
var controler = require('../controler/controler')

module.exports = (app) => {
  app.post('/api/patientdetails', controler.PatientDetails)
  app.get('/api/getAllPatient', controler.getAllPatient)
}

