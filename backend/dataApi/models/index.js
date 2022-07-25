const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({ id: mongoose.Types.ObjectId, distance: Number }, {timestamps: true});
const DataModel = mongoose.model('Data', DataSchema)

module.exports = {
    DataSchema,
    DataModel
}
