var bcrypt = require('bcrypt');

const saltRounds = 12;
var asyncPassword = 'secret';
var myOtherAsyncPassword = 'secret';

// async hashing and salting (recommended)
var asyncSalt, asyncHash;

// generating salt with 12 saltRounds
bcrypt.genSalt(saltRounds, (err, salt) => {
    asyncSalt = salt;    
    console.log('async salt--- ', asyncSalt);

    // generating hash with password and salt
    bcrypt.hash(asyncPassword, salt)
    // first then will set asyncHash to the returned hash
    .then((hash) => {
        asyncHash = hash;
        console.log('async hash--- ', asyncHash);
        return asyncHash;        
    })
    //second then will compare asyncHash with the hash of myOtherPassword
    .then((hash)=> {
        bcrypt.compare(myOtherAsyncPassword, hash, (err, res) => {
            console.log(res);
        });
    });
});



