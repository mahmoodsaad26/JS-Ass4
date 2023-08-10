"use strict";
let userEmail = document.getElementById("email");
let userName = document.getElementById("name");
let userPassword = document.getElementById("password");
let loginEmail=document.getElementById('loginEmail')
let loginPassword=document.getElementById('loginPassword')
let users;
if (localStorage.getItem("users") == null) {
   users = [];
} else {
   users = JSON.parse(localStorage.getItem("users"))
}

function addUser() {
   if (userNameValidation() == true && emailValidation() == true
    && passwordValidation() == true) {

      let user = {
         name: userName.value,
         email: userEmail.value,
         password: userPassword.value

      }
      users.push(user)
      localStorage.setItem("users", JSON.stringify(users));
      clear();
      document.getElementById("rightName").classList.remove("d-none")
      console.log(users);



   } else {
      document.getElementById("rightName").classList.add("d-none")
   }

}
function clear() {
   userName.value = "";
   userEmail.value = "";
   userPassword.value = "";
}


let signUpBtn = document.querySelector("#signUp");
signUpBtn.addEventListener("click", function () {
   addUser();
})

function userNameValidation() {
   let regex = /^[a-z]{3,}/gi;
   if (regex.test(userName.value) == true) {
      document.getElementById("wrongName").classList.add("d-none");
      return true;
   } else {
      document.getElementById("wrongName").classList.remove("d-none");
      return false;

   }
}
function emailValidation() {
   let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
   if (regex.test(userEmail.value) == true) {
      document.getElementById("wrongName").classList.add("d-none");
      return true;
   } else {
      document.getElementById("wrongName").classList.remove("d-none");
      return false;

   }
}

function passwordValidation() {
   let regex = /^.{1,}$/;
   if (regex.test(userPassword.value) == true) {
      document.getElementById("wrongName").classList.add("d-none");
      return true;
   } else {
      document.getElementById("wrongName").classList.remove("d-none");
      return false;

   }
}
function isExist(){
   for(let i=0;i<users.lenght;i++){
      if(users[i].userEmail==userEmail.value){
         document.getElementById('existEmail').classList.replace('d-none','d-block')
         return true;
      }else{
         
         return false;
      }
   }
}


//=========================================================
let loginBtn =document.querySelector('#loginBtn')
function login(){
   for(let i=0; i<users.lenght; i++){
      if(users[i].userEmail==loginEmail.value&&
         users[i].userPassword==loginPassword){
            loginBtn.setAttribute('href','welcome.html')
         
         }else{
            document.getElementById("wrongLogin").classList.replace("d-none","d-block")
            
         }
   }
}

loginBtn.addEventListener('click',function(){
  login();
  console.log("hoiiii");
})




















