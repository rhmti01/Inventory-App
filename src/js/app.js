import ProductView from "./productView.js";
import CategoryView from "./categoryView.js";


document.addEventListener("DOMContentLoaded", ()=>{
    const productView = new ProductView()
    const categoryView = new CategoryView()
    categoryView.setupApp()
    productView.setupApp()
})

