const db = require('./db');
const md5 = require('md5');

const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new db.Schema({
    name: String,
    lastName: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    }
});

UserSchema.virrual('fullName').get(function(){
    return this.name + ' ' + this.lastName;
})

UserSchema.virtual('gravatar').get(function () {
    return 'https://www.gravatar.com/avatar/' + md5(this.email);
});

UserSchema.plugin(passportLocalMongoose);

const User = db.model('User', userSchema);

module.exports = User;