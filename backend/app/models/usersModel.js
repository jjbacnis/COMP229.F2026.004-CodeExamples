const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let crypto = require('crypto'); // crypto is a dependency that provides cryptographic functionality. It is used to hash passwords and generate salts for secure password storage.

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
        required: 'Email is required',
        trim: true,
        match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
    },
    hashed_password: { // hashed password is stored in the database, not the plain text password
        type: String,
        required: 'Password is required',
    },
    salt: { // salt stores a random string that is used to hash the password. It is generated when the user sets their password and is stored in the database along with the hashed password.
        type: String
    },
    created: { // receives the now date and cannot be modified after creation
        type: Date,
        default: Date.now,
        immutable: true
    },
    updated: {
        type: Date,
        default: Date.now
    },
    admin: {
        type: Boolean,
        default: false
    }
},
    {
        collection: "users"
    }
);

UserSchema.virtual('fullName') // virtual attribute gets a full name and sets the first and last name when a full name is provided
    .get(function () {
        return this.firstName + ' ' + this.lastName;
    })
    .set(function (fullName) {
        let splitName = fullName.split(' ');
        this.firstName = splitName[0] || '';
        this.lastName = splitName[1] || '';
    });


UserSchema.virtual('password') // virtual attribute does not get stored in the database, but is used to set the hashed password and salt when a password is provided
    .set(function (password) {
        if (password.length < 6 ) {
            throw new Error('Password must be at least 6 characters.')
        }
        else {
            this.salt = Buffer.from(crypto.randomBytes(16).toString('base64'), 'base64');
            this.hashed_password = this.hashPassword(password);
        }
    });

UserSchema.methods.hashPassword = function (password) { // this function receives the string password using salt and returns the hashed password
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
}

UserSchema.methods.authenticate = function (password) { // this function validates the password by comparing the hashed password with the hashed version of the provided password
    return this.hashed_password === this.hashPassword(password);
}


// Ensure virtual fields are serialised.
UserSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hashed_password;
        delete ret.salt;
    }
});

module.exports = mongoose.model('User', UserSchema);