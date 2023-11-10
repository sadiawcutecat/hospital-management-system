const { default: mongoose } = require('mongoose');

const review = mongoose.Schema({
	name: String,
	picture: String,
	email: String,
	rating: Number,
	comments: String,
	profession: String,
});

export const reviewSchema =
	mongoose.models.reviews || mongoose.model('reviews', review);
