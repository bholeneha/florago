const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 6

const userSchema = new Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 5,
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            delete ret.password
            return ret
        }
    }
});

userSchema.pre('save', async function (next) {
    // 'this' is the user doc
    if (!this.isModified('password')) return next();
    // update the password with the computed hash
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
});

module.exports = mongoose.model('User', userSchema);