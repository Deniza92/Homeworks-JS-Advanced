console.log("Its working");


const productsContainerEl = document.querySelector(".product-container");

const PRODUCTS_URL = "https://fakestoreapi.com/products";

function fetchProducts() {
    fetch(PRODUCTS_URL)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
      console.log(data);

      renderProductsLIst(productsContainerEl, data);
    });
    
}

function renderProductsList(containerEl, productsData) {
    let productsHTML = "";
    
    for (let product of productsData) {
        productsHTML += `
        <div class="product-card">
        <h3>${product.id}. ${product.title}</h3>
        <h4>Price: $${product.price}</h4>
        <img src="${product.image}" alt="" />
        <p>${product.description}</p>
      </div>
        `;
    }
    containerEl.innerHTML = productsHTML;
}
 
fetchProducts();