
// Toggle menu

function slider(anything){
    document.querySelector('.type').src = anything;
};

let menu = document.getElementById('menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
 menu.classList.toggle('bx-x');
 navbar.classList.toggle('open');
}

// Toggle content


function trocaDiv2() {
    div1.style.display = "none";
    div2.style.display = "block";
}

function trocaDiv1() {
    div2.style.display = "none";
    div1.style.display = "block";
}


// Menu

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'bx bx-x'
    : 'bx bx-menu'
}

// Shopping cart

function openCart() {
    shopping_cart.style.display = "block"
}


function closeCart() {
    shopping_cart.style.display = "none"
}


// Adding items to shopping cart


function addItem(id, price) {

    totalPrice = parseInt(document.getElementById('totalPrice').innerHTML)

    actualPrice1 = parseInt(document.getElementById('price1').innerHTML)
    actualPrice2 = parseInt(document.getElementById('price2').innerHTML)
    if (id === 1) {

        document.getElementById('qtd1').innerHTML ++
        actualPrice1 = document.getElementById('price1').innerHTML = (price * document.getElementById('qtd1').innerHTML)

        parseInt(actualPrice1)

    } else if (id === 2) {

        document.getElementById('qtd2').innerHTML ++
        actualPrice2 = document.getElementById('price2').innerHTML = (price * document.getElementById('qtd2').innerHTML)

        parseInt(actualPrice2)
    }
    
    document.getElementById('totalPrice').innerHTML = (actualPrice1 + actualPrice2)
}


function removeItem(id, price) {
    totalPrice = parseInt(document.getElementById('totalPrice').innerHTML)
    qtd1 = parseInt(document.getElementById('qtd1').innerHTML)
    qtd2 = parseInt(document.getElementById('qtd2').innerHTML)

        if ((id === 1) && (qtd1 > 0)) {

            document.getElementById('qtd1').innerHTML --
            actualPrice1 = document.getElementById('price1').innerHTML = (price * document.getElementById('qtd1').innerHTML)
    
            parseInt(actualPrice1)
        }
        if ((id === 2) && (qtd2 > 0)) {
    
            document.getElementById('qtd2').innerHTML --
            actualPrice2 = document.getElementById('price2').innerHTML = (price * document.getElementById('qtd2').innerHTML)
        
            parseInt(actualPrice2)
        }
    
    document.getElementById('totalPrice').innerHTML = (actualPrice1 + actualPrice2)
}



