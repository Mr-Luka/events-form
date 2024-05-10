const wes = document.querySelector(".wes");
const form = document.querySelector(`[name="signup"]`);


wes.addEventListener("click", function (e){
    console.log("You clicked it!");
    const shouldChangePage = confirm("this website might be malicious! do you wish to proceed?");
    if(!shouldChangePage) {
        e.preventDefault()
    }
    console.log(shouldChangePage)
})

form.addEventListener("submit", function(e){
    console.log(e)
    e.preventDefault()
})