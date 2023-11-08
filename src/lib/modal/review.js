const { default: mongoose } = require('mongoose');

const review = mongoose.Schema({
	name: String,
	email: String,
	description: String,
	rating: Number,
});

export const reviewSchema =
	mongoose.models.reviews || mongoose.model('reviews', review);
