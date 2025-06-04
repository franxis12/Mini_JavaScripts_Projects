const btn = document.getElementById("btn")


btn.addEventListener("click", (e) => {
    e.preventDefault();

    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const message = document.getElementById("message")
    const warningName = document.getElementById("warningName")
    const warningEmail = document.getElementById("warningEmail")
    const warningMEssage = document.getElementById("warningMessage")

    warningName.textContent = "";
    warningName.classList.remove("text-red-500");
    name.classList.remove("border-red-500")
    warningEmail.textContent = "";
    warningEmail.classList.remove("text-red-500");
    email.classList.remove("border-red-500")
    warningMEssage.textContent = "";
    warningMEssage.classList.remove("text-red-500");
    message.classList.remove("border-red-500")

        const length = message.value.length;


    const esEmailValido = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    console.log(name)


    if(name.value.length < 3){
        warningName.textContent = "Plese enter a valid name";
        warningName.classList.add("text-red-500");
        name.classList.add("border-red-500")
        return

    }else if(!esEmailValido(email.value)){
        warningEmail.textContent = "Plese enter a valid Email";
        warningEmail.classList.add("text-red-500");
        email.classList.add("border-red-500")
        return

    }else if(length < 10){
        warningMEssage.textContent = "Your Message must be longer the 10 charaters";
        warningMEssage.classList.add("text-red-500");
        message.classList.add("border-red-500")
        return
    }


    alert("Thanks " + name.value + " your message was send. We will contact you at (" + email.value + ").")

    name.value = "";
    email.value = "";
    message.value = "";
})

