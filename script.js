const btn = document.querySelectorAll("button");
btn.forEach(function(button, index) {
    button.addEventListener("click", function(e) {
        var btnItem = e.target;
        var product = btnItem.parentElement;
        var productImg = product.querySelector('img').src;
        var productName = product.querySelector('.product-name').innerText;
        var productPrice = product.querySelector('.product-price').innerText;
        
        addtoCart(productImg, productName, productPrice);
        total();
        updatePrice();
        deleteProduct();
        
    })
})

function addtoCart(productImg, productName, productPrice) {
    var addtr = document.createElement('tr');
    var cartItem = document.querySelectorAll("tbody tr");
    for(var i = 0; i< cartItem.length; i++) {
        var name = document.querySelectorAll(".title");

        if (name[i].innerText == productName) { //name is name of product in cart, productName is new creation
            alert('This product has already existed in your cart!');
            return;   
        }
    }
    
    var trcontent = '<tr><td><img src="'+ productImg +'" width="70px"></td><td><p class="title">'+ productName +'</p></td><td><span class="price">'+ productPrice +'</span></td><td><input class="num" type="number" value="1" min="1" max="999"></td><td><button class="del-btn">Delete</button></td></tr>'
    addtr.innerHTML = trcontent; //drop trcontent into addtr
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr);
    
}

function total() {
    var total = 0;
    var cartItem = document.querySelectorAll("tbody tr");
    for(var i = 0; i <cartItem.length; i++) {
        var num = cartItem[i].querySelector("input").value;
        var price = document.querySelectorAll(".price");
        total += parseInt(price[i].innerText)*num;     
    }
    var totalContainer = document.querySelector(".total-value")
    totalContainer.innerHTML = total; 
    
}

function updatePrice() {
    var cartItem = document.querySelectorAll("tbody tr");
    for(var i = 0; i <cartItem.length; i++) {
        var num = cartItem[i].querySelector("input");
        num.addEventListener('change', function() {
            total();
        })  
    }     
}

function deleteProduct() {
    var cartItem = document.querySelectorAll("tbody tr");
    for(var i = 0; i <cartItem.length; i++) {
        var del = document.querySelectorAll(".del-btn");
        del[i].addEventListener("click", function(e) {
            var cartDelete = e.target;
            var cartItem = cartDelete.parentElement.parentElement;
            cartItem.remove();
            total();
            
        })  
    }  
   
}

