"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _storage = _interopRequireDefault(require("./storage.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ProductView = exports["default"] = /*#__PURE__*/function () {
  function ProductView() {
    var _this = this;
    _classCallCheck(this, ProductView);
    // variables
    this.pdtTitle = document.querySelector("#productTitle");
    this.pdtIncQty = document.querySelector("#incQty");
    this.pdtDecQty = document.querySelector("#decQty");
    this.pdtLocation = document.querySelector("#productLocations");
    this.ctgSelect = document.querySelector("#categoriesSelect");
    this.pdtAddNew = document.querySelector("#addNewProductBtn");
    this.pdtQty = document.querySelector("#productQuantity");
    this.productCenter = document.querySelector("#productsCenter");
    this.toggleBtns = document.querySelectorAll(".toggleBtn");
    this.searchInput = document.querySelector("#searchInput");
    this.sortSelect = document.querySelector("#sort");
    // event listeners
    this.pdtAddNew.addEventListener("click", function () {
      _this.addNewProduct();
    });
    this.toggleBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        _this.toggleProductQty(e);
      });
    });
    this.searchInput.addEventListener("keyup", function (e) {
      _this.searchProducts(e.target.value);
    });
    this.sortSelect.addEventListener("change", function (e) {
      _this.sortBySelect(e.target.value);
    });
  }
  return _createClass(ProductView, [{
    key: "setupApp",
    value: function setupApp() {
      this.showListedProducts(_storage["default"].getProducts);
      this.sortBySelect(this.sortSelect.value);
    }
  }, {
    key: "addNewProduct",
    value: function addNewProduct() {
      if (this.pdtTitle.value.trim().length >= 2) {
        // create new object for each category
        var newProduct = {
          id: new Date().getTime(),
          title: this.pdtTitle.value.trim(),
          quantity: this.pdtQty.innerText,
          location: this.pdtLocation.value,
          category: this.ctgSelect.value,
          persianDate: new Date().toLocaleDateString("fa-IR")
        };
        // reset inputs value
        this.pdtTitle.value = ' ';
        this.pdtQty.innerText = 0, this.pdtLocation.value = "none";
        this.ctgSelect.value = "none";
        // save product to local storage
        var pdtList = _storage["default"].getProducts;
        // console.log(pdtList);
        pdtList.push(newProduct);
        _storage["default"].saveProducts(pdtList);
        // instant update html product list from storage
        this.sortBySelect(this.sortSelect.value);
        this.showListedProducts(pdtList);
      } else {
        alert("your entered title for category must be at least 2 characters!!!");
      }
    }
  }, {
    key: "showListedProducts",
    value: function showListedProducts(productList) {
      var output = ' ';
      productList.forEach(function (product) {
        output += "   \n                <li class=\"flex items-center justify-between  w-full py-2 bg-blue-400/ text-white font-medium ss:min-w-[500px] ss:overflow-x-auto \">\n                    <p class=\"  basis-[16%] ww:text-base xx:text-[15px] dd:text-[14px] ss:text-[13px] \">".concat(product.title, "</p>\n                    <p class=\"  basis-[16%] ww:text-base xx:text-[15px] dd:text-[14px] ss:text-[13px] \">").concat(product.location, "</p>\n                    <p class=\"  basis-[16%] ww:text-base xx:text-[15px] dd:text-[14px] ss:text-[13px] \">").concat(product.category, "</p>\n                    <p class=\"  basis-[16%] font-vazir ww:text-base xx:text-[15px] dd:text-[14px] ss:text-[13px] \">").concat(product.persianDate, "</p>\n                    <p class=\"  border-2 border-slate-400 p-1 rounded-2xl ww:text-base xx:text-[15px] dd:text-[14px] ss:text-[13px] \">").concat(product.quantity, "</p>\n                    <svg id=\"").concat(product.id, "\" class=\" pdt-dlt-btn stroke-red-500 dd:h-6 dd:w-6 ss:h-5 ss:w-5 cursor-pointer\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\"\n                        viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\">\n                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                            d=\"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0\" />\n                    </svg>\n                </li>\n            ");
      });
      this.productCenter.innerHTML = output;
      this.productsAction();
    }
  }, {
    key: "productsAction",
    value: function productsAction() {
      var _this2 = this;
      // delete product event listener
      var removeBtns = _toConsumableArray(document.querySelectorAll(".pdt-dlt-btn"));
      removeBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          _this2.deleteProduct(e);
        });
      });
    }
  }, {
    key: "toggleProductQty",
    value: function toggleProductQty(e) {
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
  }, {
    key: "deleteProduct",
    value: function deleteProduct(e) {
      var productId = Number(e.currentTarget.id);
      _storage["default"].removeProduct(productId);
      this.showListedProducts(_storage["default"].getProducts);
      this.sortBySelect(this.sortSelect.value);
    }
  }, {
    key: "searchProducts",
    value: function searchProducts(searchTerm) {
      var addedProducts = _storage["default"].getProducts;
      var normalizedSearchTerm = searchTerm.toLowerCase().trim();
      var filteredProducts = addedProducts.filter(function (product) {
        return product.title.toLowerCase().trim().includes(normalizedSearchTerm);
      });
      this.sortBySelect(this.sortSelect.value);
      this.showListedProducts(filteredProducts);
    }
  }, {
    key: "sortBySelect",
    value: function sortBySelect(sortType) {
      var saveProducts = _storage["default"].getProducts;
      var sortedProducts = [];
      if (sortType === "newest") {
        sortedProducts = saveProducts.slice().sort(function (a, b) {
          return b.id - a.id;
        });
      } else if (sortType === "oldest") {
        sortedProducts = saveProducts.slice().sort(function (a, b) {
          return a.id - b.id;
        });
      } else if (sortType === "A-Z") {
        sortedProducts = saveProducts.slice().sort(function (a, b) {
          return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        });
      } else if (sortType === "Z-A") {
        sortedProducts = saveProducts.slice().sort(function (a, b) {
          return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        }).reverse();
      } else {
        sortedProducts = saveProducts.slice();
      }
      this.showListedProducts(sortedProducts);
    }
  }]);
}();
