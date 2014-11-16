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
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Post', PostSchema);