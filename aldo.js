var admin = require("firebase-admin");
var serviceAccount = require("C:/Users/Gene/Desktop/Projects/firebased/service-aldo.json");
var IDs = new Array();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

var db = admin.firestore();

const settings = { timestampsInSnapshots: true};
db.settings(settings);

//Reading from the Firestore
var docRef db.collection("Sensor Data").doc("Distance");

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
  return IDs;
