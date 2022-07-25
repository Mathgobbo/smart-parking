const mongoose = require('mongoose');

const SettingSchema = mongoose.Schema({ id: mongoose.Types.ObjectId, distanceToTrigger: Number, });
const SettingModel = mongoose.model('Setting', SettingSchema)

module.exports = {
    SettingSchema,
    SettingModel
}
