const menuEmail = document.querySelector(".navbar-email")
const DesktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppinCartContainer = document.querySelector("#shoppinCartContainer")
const cardsContainer = document.querySelector(".cards-container")


menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click", togglemobileMenu)
menuCarritoIcon.addEventListener("click", togglecarritoAside)


function toggleDesktopMenu() {
    const isAsideClosed = shoppinCartContainer.classList.contains("inactive");

    if (!isAsideClosed) {
        shoppinCartContainer.classList.add("inactive");
    }
    DesktopMenu.classList.toggle("inactive")
}

function togglemobileMenu() {
    const isAsideClosed = shoppinCartContainer.classList.contains("inactive");

    if (!isAsideClosed) {
        shoppinCartContainer.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive")

}

function togglecarritoAside() {

    
    const isMobileMenuClosed = !mobileMenu.classList.contains("inactive");
    
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }
    shoppinCartContainer.classList.toggle("inactive") ;
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Computador",
    price: 620,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});


function renderProdcts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        // product= {name, price image} -> product.image
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv= document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
    
        const productName= document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure= document.createElement("figure");
        const productImgCart= document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure); 
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
    
renderProdcts(productList)