const patient = require('../models/patientSchema')

module.exports = {
    PatientDetails: (req, res, next) => {
        var userData = req.body;
            console.log(userData)
        patient.create(userData)
            .then((responce) => {
                res.send(responce)
            })
            .catch(next)
    },
    getAllPatient: (req, res, next) => {
                patient.find({})
                    .then((data) => {
                        console.log(data)
                        res.send(data)
                    })
                    .catch(next)
            },
}