document.getElementById('form_contact').addEventListener('submit', function (event) {
    var name = document.forms["form_contact"]["full_name"];               
    var email = document.forms["form_contact"]["email"];    
    var subject = document.forms["form_contact"]["subject"];  
    var message =  document.forms["form_contact"]["message"];  

    if (name.value == "") document.getElementById("error_full_name").textContent="Enter full name !!";
    if (email.value == "") document.getElementById("error_email").textContent="Enter email !!";
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email.value)) document.getElementById("error_email").textContent = "Enter style correct of email !!";
    if (subject.value == "Select a subject") document.getElementById("error_subject").textContent="Select the subject !!";
    if (message.value == "")  document.getElementById("error_message").textContent="Enter the message !!"; 
    event.preventDefault();
});