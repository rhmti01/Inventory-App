"use strict";

var _productView = _interopRequireDefault(require("./productView.js"));
var _categoryView = _interopRequireDefault(require("./categoryView.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
document.addEventListener("DOMContentLoaded", function () {
  var productView = new _productView["default"]();
  var categoryView = new _categoryView["default"]();
  categoryView.setupApp();
  productView.setupApp();
});
console.log("babel");

// // Full Name Validation Function 
// function fulllNameee(e) {
//     const field = e.target;
//     // console.log(e.target);
//     // checking spell for input value
//     e.target.value.spellcheck = false
//     // Value Length Testing 
//     if (e.target.value.length > 20) {
//         e.target.previousElementSibling.style.opacity = "1"
//         e.target.style.borderColor = "red"
//         para1.innerHTML = "Only 20 letter is Allowed"
//         field.classList.add("error");
//     } // Number includes Testing
//     else if (/\d/.test(e.target.value)) {
//         e.target.previousElementSibling.style.opacity = "1"
//         e.target.style.borderColor = "red"
//         para1.innerHTML = "Number is Not Allowed in FullName"
//         field.classList.add("error");
//     } // value Must Not be Empty
//     else if (e.target.value == 0) {
//         e.target.previousElementSibling.style.opacity = "1"
//         e.target.style.borderColor = "red"
//         para1.innerHTML = "Please Enter your Full Name"
//         field.classList.add("error");
//     } // Symbols Must Not Includes
//     else if (/[-!$%#@^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(e.target.value)) {
//         e.target.previousElementSibling.style.opacity = "1"
//         e.target.style.borderColor = "red"
//         para1.innerHTML = "Symbols is Not Allowed"
//         field.classList.add("error");
//     } // For No Error Situations 
//     else {
//         e.target.previousElementSibling.style.opacity = "0"
//         e.target.style.borderColor = "green"
//         field.classList.remove("error");
//     }
// }
