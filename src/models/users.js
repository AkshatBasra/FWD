const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

// User schema definition
const UsersSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Pre-save hook to hash password
UsersSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next(); // Only hash password if it's modified
    try {
        const salt = await bcrypt.genSalt(10); // Generate salt
        this.password = await bcrypt.hash(this.password, salt); // Hash the password
        next();
    } catch (err) {
        next(err);
    }
});

// Method to compare plain password with hashed password
UsersSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password); // Compare password
};

const UsersModel = mongoose.model('Users', UsersSchema);

module.exports = UsersModel;
