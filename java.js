
const links = document.querySelector('.links')

const btnSignup = document.querySelector('.right-contact button')
const iptCone = document.querySelector('.right-contact input')
const topCart = document.querySelector('.cart-5')
const poptopCart = document.querySelector('.pop-cart')


topCart.addEventListener('click', ()=> {
    poptopCart.classList.toggle('active')
})

btnSignup.addEventListener('click', (e)=> {
    e.preventDefault();
    iptCone.value = '';
    alert(' your email  has been successfully updated for our latest updates')

})

