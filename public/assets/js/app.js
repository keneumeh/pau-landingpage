const firebaseConfig = {
    apiKey: "AIzaSyCOHvi1AzRVOo9JUuE9AnFcvyDosc3muB4",
    authDomain: "pau-landingpage.firebaseapp.com",
    databaseURL: "https://pau-landingpage-default-rtdb.firebaseio.com",
    projectId: "pau-landingpage",
    storageBucket: "pau-landingpage.appspot.com",
    messagingSenderId: "460800265973",
    appId: "1:460800265973:web:7c34bb80eb50e86d84bfbc"
  };

  firebase.initializeApp(firebaseConfig);

  var contactFormDB = firebase.database().ref('contactForm')

document.getElementById('contactForm').addEventListener('submit', submitForm);
//submit form
function submitForm(e){
    e.preventDefault();

   let name = document.querySelector('#name').value;
   let email = document.querySelector('#email').value;
   let message = document.querySelector('#message').value;

    saveMessages(name, email, message);
//display alert
    document.querySelector('.alert').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);
    //resetform
    document.getElementById('contactForm').reset();

}
    const saveMessages = (name, email, message) =>{
        var newContactForm = contactFormDB.push();

        newContactForm.set({
            name: name,
            email: email,
            message: message,
        });
    }


    /* var name = getElementVal('name');
    var email = getElementVal('email')
    var message = getElementVal('message')
    console.log(name, email, message);
}
  //gets the values
    const getElementById = (id) =>{
        return document.getElementById(id).value
    }
    */

/*const firebaseConfig = {
    apiKey: "AIzaSyDmxn63A8_VnxRhIfmrKOuWL6VmP9z9dKo",
    authDomain: "paumplandingpage.firebaseapp.com",
    projectId: "paumplandingpage",
    storageBucket: "paumplandingpage.appspot.com",
    messagingSenderId: "604546207549",
    appId: "1:604546207549:web:b8ccb6304e1dd95792bf54",
    measurementId: "G-98K7N8MD38"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

//message collection
  var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);
//submit form
function submitForm(e){
    e.preventDefault();

    //gets the values
    var name =getInputVal('name');
    var email =getInputVal('email');
    var message =getInputVal('message');

    saveMessage(name, email, message);
}
    function getInputVal(id){
        return document.getElementById(id).value
    }

    //save the message to firebase message database
    function saveMessage(name, email, message){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
            name: name,
            email: email,
            message: message,
        });
    }
*/