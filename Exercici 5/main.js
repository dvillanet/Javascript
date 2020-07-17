/*FORMULARIO*/

//Seleccionar elementos del formulario
var inputSearch = document.forms['searchForm']['inputSearch'];
var inputLoginUser = document.forms['loginForm']['loginUser'];
var inputLoginPass = document.forms['loginForm']['loginPass'];
var inputAltaUser = document.forms['altaForm']['altaUser'];
var inputAltaPass = document.forms['altaForm']['altaPass'];
var inputAltaPass1 = document.forms['altaForm']['altaPass1'];
var inputAltaStreet = document.forms['altaForm']['altaStreet'];
var inputAltaNum = document.forms['altaForm']['altaNum'];
var inputAltaCity = document.forms['altaForm']['altaCity'];
var inputAltaCP = document.forms['altaForm']['altaCP'];


//Seleccionar todos los EVENTOS
inputSearch.addEventListener('click', searchVerify, true);
inputLoginUser.addEventListener('blur',validateLogin,true );
inputLoginPass.addEventListener('blur',validatePass,true );
inputAltaUser.addEventListener('blur',validateUser,true );
inputAltaPass.addEventListener('input',validateAltaPass,true );
inputAltaPass1.addEventListener('input',validateAltaPass1,true );
inputAltaStreet.addEventListener('blur',validateVuit.bind(inputAltaStreet),true);
inputAltaNum.addEventListener('blur',validateVuit.bind(inputAltaNum),true);
inputAltaCity.addEventListener('blur',validateVuit.bind(inputAltaCity),true);
inputAltaCP.addEventListener('blur',validateVuit.bind(inputAltaCP),true);



//Seleccionar mensajes de error
var name_error = document.getElementById('name_error')

function searchVerify() {
 /*    var inputValue=inputSearch.value;
    if (inputValue.length < 3) {
      inputSearch.style.border = "1px solid #5e6e66";
      inputSearch.value="La cerca te que contenir més de 3 lletres.";
      return false;
    } */
    inputSearch.style.color = "black";
    inputSearch.value="";

}

function validateSearch() {
  
    var inputValue=inputSearch.value;
  
    if (inputValue.length < 4) {
        inputSearch.style.color = "red";
        inputSearch.value="La cerca te que contenir més de 3 lletres.";
       
        return false;
    }
}

function validateLogin() {
    const input = inputLoginUser.value;
    if (input && /(^\w.*@\w+\.\w)/.test(input)) {
        inputLoginUser.classList.add("is-valid")
        inputLoginUser.classList.remove("is-invalid");
    } else{
        inputLoginUser.classList.add("is-invalid");
        inputLoginUser.classList.remove("is-valid")
    }
    return false;
}
function validatePass() {
    const input = inputLoginPass.value;
    if (input && /^(?=.{8,20}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/.test(input)) { 
        inputLoginPass.classList.add("is-valid")
        inputLoginPass.classList.remove("is-invalid");
    } else{
        inputLoginPass.classList.add("is-invalid");
        inputLoginPass.classList.remove("is-valid")
    }
    return false;
}

function validateUser() {
    const input = inputAltaUser.value;
    if (input && /(^\w.*@\w+\.\w)/.test(input)) {
        inputAltaUser.classList.add("is-valid")
        inputAltaUser.classList.remove("is-invalid");
    } else{
        inputAltaUser.classList.add("is-invalid");
        inputAltaUser.classList.remove("is-valid")
    }
    return false;
}

function validateAltaPass() {
    const input = inputAltaPass.value;
if (input && /^(?=.{8,20}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/.test(input)) { 

inputAltaPass.classList.add("is-valid")
        inputAltaPass.classList.remove("is-invalid");
    } else{
        inputAltaPass.classList.add("is-invalid");
        inputAltaPass.classList.remove("is-valid")
    }
    return false;
}
function validateAltaPass1() {
    const input = inputAltaPass.value;
    const input1 = inputAltaPass1.value;
    if (input==input1) {
        inputAltaPass1.classList.add("is-valid")
        inputAltaPass1.classList.remove("is-invalid");
    } else{
        inputAltaPass1.classList.add("is-invalid");
        inputAltaPass1.classList.remove("is-valid")
    }
    return false;
}

function validateVuit(inputToCheck) {
    const input = inputToCheck.srcElement.value;
    if (input.length >0) {
        inputToCheck.srcElement.classList.add("is-valid")
        inputToCheck.srcElement.classList.remove("is-invalid");
    } else{
        inputToCheck.srcElement.classList.add("is-invalid");
        inputToCheck.srcElement.classList.remove("is-valid")
    }
    return false;
}