let client = require('../dbConnection');
let collection = client.db().collection('Bikes');

async function insertBike(bike){
    return collection.insertOne(bike);
}

async function getAllBikes(){
    return collection.find().toArray();
}

module.exports = {insertBikes, getAllBikes}