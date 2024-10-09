import Storage from "./storage.js";

export default class ProductView {
    constructor() {
        // variables
        this.pdtTitle = document.querySelector("#productTitle")
        this.pdtIncQty = document.querySelector("#incQty")
        this.pdtDecQty = document.querySelector("#decQty")
        this.pdtLocation = document.querySelector("#productLocations")
        this.ctgSelect = document.querySelector("#categoriesSelect")
        this.pdtAddNew = document.querySelector("#addNewProductBtn")
        this.pdtQty = document.querySelector("#productQuantity")
        this.productCenter = document.querySelector("#productsCenter")
        this.toggleBtns = document.querySelectorAll(".toggleBtn")
        this.searchInput = document.querySelector("#searchInput")
        // event listeners
        this.pdtAddNew.addEventListener("click", () => {
            this.addNewProduct()
        })
        this.toggleBtns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                this.toggleProductQty(e)
            })
        })
        this.searchInput.addEventListener("keyup",(e)=>{
            this.searchProducts(e.target.value)
        })
    }

    setupApp() {
        this.showListedProducts(Storage.getProducts)
    }

    addNewProduct() {
        if (this.pdtTitle.value.trim().length >= 2) {
            // create new object for each category
            const newProduct = {
                id: new Date().getTime(),
                title: this.pdtTitle.value,
                quantity: this.pdtQty.innerText,
                location: this.pdtLocation.value,
                category: this.ctgSelect.value,
                persianDate: new Date().toLocaleDateString("fa-IR")
            }
            // reset inputs value
            this.pdtTitle.value = ' '
            this.pdtQty.innerText = 0,
                this.pdtLocation.value = "none"
            this.ctgSelect.value = "none"
            // save product to local storage
            const pdtList = Storage.getProducts
            // console.log(pdtList);
            pdtList.push(newProduct)
            Storage.saveProducts(pdtList)
            // instant update html product list from storage
            this.showListedProducts(pdtList)

        } else {
            alert("your entered title for category must be at least 2 characters!!!")
        }

    }

    showListedProducts(productList) {
        let output = ' '
        productList.forEach(product => {
            output += `   
                <li class="flex items-center justify-between  w-full py-2 bg-blue-400/ text-white font-medium ss:min-w-[500px] ss:overflow-x-auto ">
                    <p class="  basis-[16%] ww:text-base xx:text-[15px] dd:text-[14px] ss:text-[13px] ">${product.title}</p>
                    <p class="  basis-[16%] ww:text-base xx:text-[15px] dd:text-[14px] ss:text-[13px] ">${product.location}</p>
                    <p class="  basis-[16%] ww:text-base xx:text-[15px] dd:text-[14px] ss:text-[13px] ">${product.category}</p>
                    <p class="  basis-[16%] font-vazir ww:text-base xx:text-[15px] dd:text-[14px] ss:text-[13px] ">${product.persianDate}</p>
                    <p class="  border-2 border-slate-400 p-1 rounded-2xl ww:text-base xx:text-[15px] dd:text-[14px] ss:text-[13px] ">${product.quantity}</p>
                    <svg id="${product.id}" class=" pdt-dlt-btn stroke-red-500 dd:h-6 dd:w-6 ss:h-5 ss:w-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </li>
            `
        });
        this.productCenter.innerHTML = output;
        this.productsAction()
    }

    productsAction() {
        // delete product event listener
        const removeBtns = [...document.querySelectorAll(".pdt-dlt-btn")]
        removeBtns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                this.deleteProduct(e)
            })
        })
    }

    toggleProductQty(e) {
        // console.log(e.currentTarget.id);
        switch (e.currentTarget.id) {
            case "incQty":
                this.pdtQty.innerText++;
                break;
            case "decQty":
                this.pdtQty.innerText--;
                break;
        }
    }

    deleteProduct(e) {
        const productId = Number(e.currentTarget.id)
        Storage.removeProduct(productId)
        this.showListedProducts(Storage.getProducts)
    }

    searchProducts(searchTerm) {
        const addedProducts = Storage.getProducts
        const normalizedSearchTerm = searchTerm.toLowerCase().trim();
        const filteredProducts = addedProducts.filter((product) =>
            product.title.toLowerCase().trim().includes(normalizedSearchTerm)
        );
        this.showListedProducts(filteredProducts);
    }

}