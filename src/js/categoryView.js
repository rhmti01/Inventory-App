import Storage from "./storage.js";

export default class CategoryView {
    constructor(){  
        // variables
        this.ctgTitleInput = document.querySelector("#categoryTitle")
        this.ctgDescInput = document.querySelector("#categoryDescription")
        this.ctgCacelBtn = document.querySelector("#categoryCanelBtn")
        this.ctgAddBtn = document.querySelector("#categoryAddNewBtn")
        // event listeners
        this.ctgAddBtn.addEventListener("click",()=>{
            this.addNewCategory()
        })
        this.ctgCacelBtn.addEventListener("click",()=>{
            this.ctgTitleInput.value = ' '
            this.ctgDescInput.value = ' '
        })
    }

    setupApp(){
        // this.showListedCategory()
    }

    addNewCategory(){
        console.log(this.ctgTitleInput.value);
        console.log(this.ctgDescInput.value);
    }





}