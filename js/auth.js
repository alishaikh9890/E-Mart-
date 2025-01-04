
let register = [];
document.getElementById("register").addEventListener("submit", function(e){
 e.preventDefault();

 let obj = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    phone: document.querySelector("#phone").value,
    password: document.querySelector("#password").value,
 }

 register = JSON.parse(localStorage.getItem("register")) || []

  let log = register.filter((ele) => {
    if(ele.email == obj.email && ele.password == obj.password){
       return ele;
    }
    })

 if(log[0]){
        alert("user already exist");
 }
else if(obj.name != "" && obj.email !="" && obj.phone !="" && obj.password != "")
{


  localStorage.setItem("curUser", JSON.stringify(obj));

register.push(obj);

localStorage.setItem("register", JSON.stringify(register));

let myModal = new bootstrap.Modal(document.querySelector("#exampleModal"))
myModal.hide();

location.reload()


}else{
 alert("Please register first")
}

}
)


document.getElementById("login").addEventListener("submit", function(e){
 e.preventDefault();

 let objlog = {
    email: document.querySelector("#email1").value,
    password: document.querySelector("#password1").value
 }
if( objlog.email !="" && objlog.password != "")
{

 register = JSON.parse(localStorage.getItem("register"))

  let log = register.filter((ele) => {
    if(ele.email == objlog.email && ele.password == objlog.password){
       return ele;
    }
    })

    localStorage.setItem("curUser", JSON.stringify(log))

    if(log[0]){
        let curUser = log[0];
        localStorage.setItem("curUser", JSON.stringify(curUser));
        
        let myModal = new bootstrap.Modal(document.querySelector("#exampleModal"))
        myModal.hide();

        location.reload()

    }
    else{
        alert("user not register")
    }

}else{
 alert("Please Login first")
}

}
)

