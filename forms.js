const wes = document.querySelector(".wes");
const form = document.querySelector(`[name="signup"]`);


// wes.addEventListener("click", function (e){
//     console.log("You clicked it!");
//     const shouldChangePage = confirm("this website might be malicious! do you wish to proceed?");
//     if(!shouldChangePage) {
//         e.preventDefault()
//     }
//     console.log(shouldChangePage)
// })

// form.addEventListener("submit", function(e){
//     const name = e.currentTarget.name.value;
//     if (name.includes("chad")){
//         alert("sorry bro")
//         e.preventDefault()
//     }
// })
// function logEvent(e) {
//     console.log(e.type)
//     console.log(e.currentTarget.value)
// }
// form.name.addEventListener("keyup", logEvent);
// form.name.addEventListener("keydown", logEvent);
// form.name.addEventListener("focus", logEvent)
// form.name.addEventListener("blur", logEvent)

function handleSubmit (e){
    e.preventDefault()
    const email = e.currentTarget.email.value;
    if(email.includes("gmail")){
        alert("Did you use to have hotmail.com ?");
    } else if (email.includes("hotmail")){
        alert("You are an old baby aren't ya?");
    }
}

form.addEventListener("submit", handleSubmit)