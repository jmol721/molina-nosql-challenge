const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/]
        },
        thoughts: {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        },
        friends: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.reduce((total, users) => total + user.length + 1, 0);
});

const User = model('User', UserSchema);

module.exports = User;