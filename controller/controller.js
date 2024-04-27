let model = require('../models/bikes');

const insertBike = async function(req, res) {
    let bike = req.body;
    return model.insertBike(bike);
}

const getAllBikes = async function(req, res) {
    return model.getAllBikes();
}

module.exports = {insertBike, getAllBikes}