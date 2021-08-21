const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const User = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String },
        email: { type: String },
        slug: { type: String, slug: 'username', unique: true },
    },
    {
        timestamps: true,
    },
);

// add glugins
mongoose.plugin(slug);
User.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('User', User);
