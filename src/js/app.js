import ProductView from "./productView.js";
import CategoryView from "./categoryView.js";


document.addEventListener("DOMContentLoaded", ()=>{
    const productView = new ProductView()
    const categoryView = new CategoryView()
    categoryView.setupApp()
    productView.setupApp()
})


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





