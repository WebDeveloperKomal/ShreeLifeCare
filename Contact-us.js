function saveContactForm(){
    var ContactForm={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        subject:document.getElementById('subject').value,
        message:document.getElementById('message').value
    };

    console.log(JSON.stringify(ContactForm))
    let headers=new Headers();
    headers.append('content-Type','application/json');
    headers.append('Accept','appliction/json');

    fetch("http://localhost:8080/add-contacts",{
        method:'POST',
        body:JSON.stringify(ContactForm),
        headers:headers,
    })
    .then(response=> response.json())
    .then(json=>console.log(json))
    .catch(error=>console.error('Error:',error));
}

function getContact(){
    fetch("http://localhost:8080/get-all-contacts")
    .then(response=> response.json())
    .then(json=>console.log(json))
}
