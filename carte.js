const cartPop = document.querySelector('.added-cart')
const btnadCarted = document.querySelector('.hey') 


btnadCarted.addEventListener('click', (e)=> {
    e.preventDefault();
    cartPop.innerHTML = ` Succesfully added to the cart`
    cartPop.style.color = 'green'
    cartPop.style.fontSize = '12px'
    cartPop.style.marginTop = '12px'
    
    setTimeout(() => {
        cartPop.innerHTML = ' ';
    }, 2000);

})
