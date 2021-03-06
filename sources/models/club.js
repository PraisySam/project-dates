/** @format */

var mongoose = require('mongoose');
var clubSchema = new mongoose.Schema({
	clubName: String,
	memberAccess: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'AccessLevel',
		},
	],
	facAd: String,
	logo: String,
	events: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Event',
		},
	],
	society: String,
	domain: String,
},{
    timestamps: true
});

module.exports = mongoose.model('Club', clubSchema);
