const shoppingCart = [];
const shoppingCartElement = document.querySelector("#shopping-cart");
const totalElement = document.querySelector("#total span");

let total = 0;

document.querySelectorAll(".order-button").forEach(button => {
    button.addEventListener("click", event => {
        const targetElement = event.target.parentNode.parentNode;

        shoppingCart.push({
            name: targetElement.querySelector(".item-name").innerHTML,
            price: parseFloat(targetElement.querySelector(".item-price").innerHTML)
        });

        shoppingCartElement.innerHTML = '';
        total = 0;

        shoppingCart.forEach(item => {
            const shoppingItem = document.createElement("li");
            const itemName = document.createElement("p");
            const itemPrice = document.createElement("p");
            itemName.innerText = item.name;
            itemPrice.innerText = `$${item.price}`;
            shoppingItem.appendChild(itemName);
            shoppingItem.appendChild(itemPrice);
            shoppingCartElement.appendChild(shoppingItem);
            total += item.price;
        });

        totalElement.innerHTML = total;
    });
});
