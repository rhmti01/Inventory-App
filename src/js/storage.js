export default class Storage{
    
    static getProducts(){
        return JSON.parse(localStorage.getItem("products")) || []
    }

    static getCategories(){
        return JSON.parse(localStorage.getItem("categories")) || []
    }

    static saveProducts(productsList){
        localStorage.setItem("products",JSON.stringify(productsList))
    }

    static saveCategories(categoriesList){
        localStorage.setItem("categories",JSON.stringify(categoriesList))
    }

}