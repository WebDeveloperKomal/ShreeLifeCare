
function saveAppointmentForm(){
    var AppointmentForm={
         name:document.getElementById('name').value,
         email:document.getElementById('email').value,
         age:document.getElementById('age').value,
         gender:document.getElementById('gender').value,
         time:document.getElementById('time').value,
         doctor:document.getElementById('doctor').value,
         phoneNo:document.getElementById('phoneNo').value,
         date:document.getElementById('date').value
    };

    console.log(JSON.stringify(AppointmentForm))
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Accept','aplication/json');

    fetch("http://localhost:8080/Add-Appointment",{
        method:'POST',
        body:JSON.stringify(AppointmentForm),
        headers:headers,
    })
    .then(response=> response.json())
    .then(json=>console.log(json))
    .catch(error=>console.error('Error:',error));
}


function  getAppointments(){
    fetch("http://localhost:8080/get-all-Appointments")
    .then(response=> response.json())
    .then(json=>console.log(json))
}


