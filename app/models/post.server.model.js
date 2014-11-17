'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Post Schema
 */
var PostSchema = new Schema({
	title: {
		type: String,
		default: '',
		required: 'Please fill Post title',
		trim: true
	},
	link: {
		type: String,
		default: '',
		required: 'Please fill Post link',
		trim: true
	},
	rating: {
		type: Number,
		default: 0
	},
	comments: {
		type: Schema.ObjectId,
		ref: 'Comment'
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

PostSchema.methods.upvote = function(cb) {
	this.upvotes += 1;
	this.save(cb);
};

mongoose.model('Post', PostSchema);