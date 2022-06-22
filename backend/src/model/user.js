const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator')

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        index: {
            unique: true,
        },
    },
    lastName: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        default: 2,
        required: true
    },
    avatar: {
        type: String,
        default: 'default.png',
        required: true
    }
});

UserSchema.plugin(require('mongoose-bcrypt'));

UserSchema.plugin(idValidator)

module.exports = mongoose.model('User', UserSchema);
