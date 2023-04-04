//* In Profile
// import * as deleteCurrentUserEmail from "./script.js";
// deleteBtn.addEventListener( 'click', deleteCurrentUserEmail )

const deleteBtn = document.querySelector(".deleteBtn");
deleteBtn.addEventListener("click", deleteUser);

function deleteUser() {
  // console.log(localStorage.getItem(email));

  //! removeItem - видаляє дані за ключем
  // window.localStorage.removeItem(key);

  window.location.href = "./index.html";

  window.localStorage.clear();
}

const logoutBtn = document.querySelector(".logoutBtn");
logoutBtn.addEventListener("click", logOut);

function logOut() {
  window.location.href = "./index.html";
}
