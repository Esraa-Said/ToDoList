
function changeProp(but){
const buttons = document.querySelectorAll(".logButton");
for(let i=0;i<buttons.length;i++){
if(but == buttons[i]){
    buttons[i].style.backgroundColor= "#006ae2";
    buttons[i].style.color="#fff";
}
else {
    buttons[i].style.backgroundColor= "#fff";
    buttons[i].style.color="#000";


}
}

}

function signUp(){
    let signn = document.getElementById("signIn");
    signn.style.display = "none";
    let sign = document.getElementById("signUp");
    sign.style.display = "block";

}

function signIn(){
    let signn = document.getElementById("signUp");
    signn.style.display = "none";
    let sign = document.getElementById("signIn");
    sign.style.display = "block";

}
if(innerWidth<=1000){


const container = document.getElementsByClassName("container");
container[0].style.height = (innerHeight-300) + 'px';
}

// logIn
function logIn(){
    const inputs = document.getElementsByTagName("input");

    dataIn = {
        username : inputs[0].value,
        password : inputs[1].value
    };
    console.log(dataIn);
};

// logUp
function logUp(){
    const inputs = document.getElementsByTagName("input");

    dataup = {
        username : inputs[2].value,
        email : inputs[3].value,
        password : inputs[4].value
    };
    console.log(dataup);
};