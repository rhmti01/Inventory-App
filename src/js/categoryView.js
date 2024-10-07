import Storage from "./storage.js";

export default class CategoryView {
    constructor() {
        // variables
        this.ctgTitleInput = document.querySelector("#categoryTitle")
        this.ctgDescInput = document.querySelector("#categoryDescription")
        this.ctgCacelBtn = document.querySelector("#categoryCanelBtn")
        this.ctgAddBtn = document.querySelector("#categoryAddNewBtn")
        this.ctgSelect = document.querySelector("#categoriesSelect")
        // event listeners
        this.ctgAddBtn.addEventListener("click", () => {
            this.addNewCategory()
        })
        this.ctgCacelBtn.addEventListener("click", () => {
            this.ctgTitleInput.value = ' '
            this.ctgDescInput.value = ' '
        })
    }

    setupApp() {
        this.instantCtgUpdate()
    }

    addNewCategory() {
        if (this.ctgTitleInput.value.trim().length >= 2) {
            // create new object for each category
            const newCategroy = {
                id: new Date().getTime(),
                title: this.ctgTitleInput.value,
                description: this.ctgDescInput.value,
            }
            // reset inputs value
            this.ctgTitleInput.value = ' '
            this.ctgDescInput.value = ' '
            // save category to local storage
            const ctgList = Storage.getCategories()
            ctgList.push(newCategroy)
            Storage.saveCategories(ctgList)
            // instant update html category list from storage
            this.instantCtgUpdate()
        } else {
            alert("your entered title for category must be at least 2 characters!!!")
        }
    }

    instantCtgUpdate() {
        const ctgListTitles = Storage.getCategories().map(obj => obj.title.trim())
        // create option for each category
        ctgListTitles.forEach(option => {
            const newOption = document.createElement("option")
            newOption.value = option;
            newOption.textContent = option;
            // append new created option to select tg
            this.ctgSelect.append(newOption)
        });
    }



}