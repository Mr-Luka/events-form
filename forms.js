const wes = document.querySelector(".wes");

wes.addEventListener("click", function (e){
    console.log("You clicked it!");
    const shouldChangePage = confirm("this website might be malicious! do you wish to proceed?");
    if(!shouldChangePage) {
        e.preventDefault()
    }
    console.log(shouldChangePage)
})