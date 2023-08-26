const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const name = form.name.value
    const email = form.email.value
    const age = form.age.value
    const gender = form.gender.value
    const time = form.time.value
    const Doctor = form.Doctor.value
    const phone = form.phone.value
    const date = form.date.value

    const authenticated =authentication(name,email,age,gender,time,Doctor,phone,date)

    if(authenticated){
      window.location.href ="ThankYou.html"
    }else{
        alert("Invalid Email Or Password")
    }
})

function authentication(name,email,age,gender,time,Doctor,phone,date){
   // Validate name (non-empty)
   if (name === "") {
    alert("Please provide your name.");
    return false;
}

// Validate email (non-empty and valid format)
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (email === "" || !emailPattern.test(email)) {
    alert("Please provide a valid email address.");
    return false;
}

// Validate message (non-empty)
if (age === "") {
    alert("Please provide a message.");
    return false;
}

// Validate message (non-empty)
if (gender === "") {
    alert("Please provide a message.");
    return false;
}

// Validate message (non-empty)
if (time === "") {
    alert("Please provide a message.");
    return false;
}

// Validate message (non-empty)
if (Doctor === "") {
    alert("Please provide a message.");
    return false;
}

// Validate message (non-empty)
if (phone === "") {
    alert("Please provide a message.");
    return false;
}

// Validate message (non-empty)
if (date === "") {
    alert("Please provide a message.");
    return false;
}
// All validations passed
return true;
}