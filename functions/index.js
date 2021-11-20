const admin = require("firebase-admin");
const serviceAccount = require("./co-eat-server-firebase-adminsdk-5efhq-902664862d.json");
const dotenv = require("dotenv");

dotenv.config();

let firebase;
if(admin.apps.length === 0){
    firebase = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}
else{
    firebase = admin.app();
}

module.exports={
    api: require('./api'),
};