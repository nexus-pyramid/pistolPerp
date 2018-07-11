var mongoose = require('mongoose');
	Schema = mongoose.Schema;

var TrackSchema = new Schema({
	uploaded_at: {type: Date, default: Date.now},
	thumbnail: {type: String, default:'./'},
	description: String,
    image: {
		type: String,
		default:''
	}
});
mongoose.model('Track', TrackSchema);