// function validateForm() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var phone = document.getElementById("phone").value;
//     var appointmentDate = document.getElementById("date").value;
//     var reason = document.getElementById("reason").value;
    
//     // Validate name (non-empty)
//     if (name === "") {
//         alert("Please provide your name.");
//         return false;
//     }
    
//     // Validate email (non-empty and valid format)
//     var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (email === "" || !emailPattern.test(email)) {
//         alert("Please provide a valid email address.");
//         return false;
//     }
    
//     // Validate phone (non-empty and valid format)
//     var phonePattern = /^\d{10}$/; // Change this pattern according to your country's phone format
//     if (phone === "" || !phonePattern.test(phone)) {
//         alert("Please provide a valid phone number.");
//         return false;
//     }
    
//     // Validate appointment date (not in the past)
//     var today = new Date();
//     var selectedDate = new Date(appointmentDate);
//     if (selectedDate < today) {
//         alert("Please choose a future date for the appointment.");
//         return false;
//     }
    
//     // Validate reason (non-empty)
//     if (reason === "") {
//         alert("Please provide a reason for the appointment.");
//         return false;
//     }
    
//     // All validations passed
//     return true;
// }


function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

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
    if (message === "") {
        alert("Please provide a message.");
        return false;
    }

    // All validations passed
    return true;
}