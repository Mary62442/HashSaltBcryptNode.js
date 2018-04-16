var bcrypt = require('bcrypt');

const saltRounds = 12;
var syncPassword = 'secret';
var myOtherSyncPassword = 'secret';

//sync hashing and salting
var syncSalt = bcrypt.genSaltSync(saltRounds);
var syncHash = bcrypt.hashSync(syncPassword, syncSalt);

//compare syncHash with myOtherSyncPassword
var result = bcrypt.compareSync(myOtherSyncPassword, syncHash); 

console.log('sync salt--- ', syncSalt)
console.log('sync hash---  ', syncHash);
console.log(result);
