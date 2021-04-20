const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: [true, 'User name is required'] },
    email: { type: String },
    password: { type: String },
    confirmPassword: { type: String },
    location: { type: String, default: null },
    phone: { type: String, default: null },
    active: { type: Boolean, default: true },
    facebook_id: { type: String },
    account_type: { type: String, enum: ['local', 'facebook', 'google'] },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
