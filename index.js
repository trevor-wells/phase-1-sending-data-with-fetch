function submitData(myName, myEmail){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({name: myName, email: myEmail})
        })
        .then(response => response.json())
        .then(data => {document.body.textContent = data.id})
        .catch(error => {document.body.textContent = error.message})
    }