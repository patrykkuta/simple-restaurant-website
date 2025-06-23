fetch('../assets/products.json')
.then(response =>{
    if(!response.ok) {
        throw new Error(response.status);
    }
    return response.text();
})
.then(products => displayMenu(products))
.catch(err => console.error(err.message));

var categories;

function displayMenu(products) {

    categories = JSON.parse(products).categories;

    let categoriesSelection = document.getElementById("categories-selection");

    createCategoriesSelection(categories, categoriesSelection);
    activateMainsCategory();
}

function activateMainsCategory() {
    let mainDishes = document.getElementById("mains-selection");
    mainDishes.click();
}

function createCategoriesSelection(categories, selectionContainer) {
    categories.forEach(category => {
        var a = document.createElement("a");

        a.id = category.name.toLowerCase().replace(" ", "-").concat("-selection");
        a.innerHTML = category.name.toUpperCase();

        a.style.maxWidth = "130px";
        a.style.padding = "15px";
        a.style.justifyContent = "center";
        a.style.display = "flex";
        a.style.alignItems = "flex-end";
        a.style.cursor = "pointer";
        a.style.textAlign = "center";

        a.onclick = function() {

            let areProductsDisplayed = (document.getElementById(a.id.replace("-selection", "")) != null);

            setSelectionActive(selectionContainer, a);

            if (!areProductsDisplayed) {
                let productsContainer = document.getElementById("products-container");
                displayProducts(productsContainer, a);
            }

        }

        selectionContainer.appendChild(a);
    });
}

function setSelectionActive(selectionContainer, currentSelection) {
    Array.from(selectionContainer.children).forEach(child => {
        if (child === currentSelection) {
            child.style.background = "white";
            child.style.color = "rgb(38, 38, 38)";
            child.style.fontWeight = "bold";
            child.style.boxShadow = "inset 0 5px 0 rgb(187, 107, 50)";
        }
        else {
            child.style.background = "black";
            child.style.color = "white";
            child.style.fontWeight = "normal";
            child.style.boxShadow = "none";
        }
    });
}

function removePreviousProducts(productsContainer) {
    Array.from(productsContainer.children).forEach(child => {
        productsContainer.removeChild(child);
    });
}

function displayProducts(productsContainer, categorySelection) {
    removePreviousProducts(productsContainer);
    displayCategoryDetails(productsContainer, categorySelection);
}

function displayCategoryDetails(productsContainer, categorySelection) {
    let categoryName = document.getElementById("category-name");
    categoryName.innerHTML = categorySelection.innerHTML;

    let categoryDescription = document.getElementById("category-description");

    categories.forEach(category => {
        if (category.name.toUpperCase() == categorySelection.innerHTML) {
            addProducts(productsContainer, category);
            categoryDescription.innerHTML = category.description;
        }
    });
}

function addProducts(productsContainer, category) {
    var productsContainerChild = document.createElement("div");
    productsContainerChild.style.width = "100%";
    productsContainerChild.style.height = "fit-content";
    productsContainerChild.id = category.name.toLowerCase().replace(" ", "-");

    productsContainer.appendChild(productsContainerChild);

    category.items.forEach(product => {
        addProduct(productsContainerChild, product);
    });
}

function addProduct(productsContainerChild, product) {
    let productObject = new Product(product.name, product.description, product.price);
    
    productsContainerChild.appendChild(productObject.init());

}

class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    init() {
        let div = document.createElement("div");
        div.style.width = "100%";
        div.style.height = "fit-content";
        div.style.marginTop = "20px";
        div.style.display = "inline-flex";
        div.style.boxSizing = "border-box";
        div.style.textAlign = "left";
        div.style.boxShadow = "3px 3px 0px grey";
        div.style.transition = "scale 0.3s, box-shadow 0.3s, border 0.3s";
        div.style.border = "1px solid rgb(250,250,250)";

        div.onmouseenter = function() {
            div.style.boxShadow = "6px 6px 0px black";
            div.style.scale = "102%";
            div.style.border = "1px solid rgb(220,220,220)";
        }

        div.onmouseleave = function() {
            div.style.boxShadow = "3px 3px 0px grey";
            div.style.scale = "100%";
            div.style.border = "1px solid rgb(250,250,250)";
        }

        div.innerHTML = `
        <div style="margin: 20px; width: 100%; font-weight: bold;">
            <p>
                ${this.name}
            </p>
            <p style="font-weight: normal; color: grey;">
                ${this.description}
            </p>
            <p style="text-align: right">
                £${this.price}
            </p>
        </div>`;
        return div;
    }
}