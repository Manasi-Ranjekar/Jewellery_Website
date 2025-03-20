document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.querySelector(".cart-items");
    const emptyCartMessage = document.querySelector(".empty-cart");

    function checkCart() {
        if (cartItems.children.length === 0) {
            emptyCartMessage.style.display = "block";
            cartItems.style.display = "none";
        } else {
            emptyCartMessage.style.display = "none";
            cartItems.style.display = "block";
        }
    }

    checkCart(); // Run on page load
});
