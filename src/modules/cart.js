import renderCart from './renderCart';
import postData from './postData';

const cart = () => {
    const cartBtn = document.getElementById('cart')
    const cartModel = document.querySelector('.cart')
    const closeCartBtn = cartModel.querySelector('.cart-close')
    const cartTotal = cartModel.querySelector('.cart-total > span')
    const cartSendBtn = cartModel.querySelector('.cart-confirm')
    const goodsWrapper = document.querySelector('.goods')
    const cartWrapper = document.querySelector('.cart-wrapper')

    
   
    const openCart = () => {
        const cart = localStorage.getItem('cart') ? 
                JSON.parse(localStorage.getItem('cart')) : []
        cartModel.style.display = 'flex'

        renderCart(cart)
        cartTotal.textContent = cart.reduce((sum, goodItem) =>{
            return sum + goodItem.price
        }, 0)
    }
    const closeCart = () => {
        cartModel.style.display = ''
    }

    /* cartBtn.onclick = function(){
        openCart()
    } */
    cartBtn.addEventListener('click', openCart)
    closeCartBtn.addEventListener('click', closeCart)
    goodsWrapper.addEventListener('click', (event) =>{
        if(event.target.classList.contains('btn-primary')){
            const card = event.target.closest('.card')
            const key = card.dataset.key
            const goods = JSON.parse(localStorage.getItem('goods'))
            const cart = localStorage.getItem('cart') ? 
                JSON.parse(localStorage.getItem('cart')) : []
            const goodItem = goods.find((item) => {
                return item.id === +key
            })

            cart.push(goodItem)

            localStorage.setItem('cart', JSON.stringify(cart))
        }
    })
    cartWrapper.addEventListener('click',(event) =>{
        if(event.target.classList.contains('btn-primary')){
            const cart = localStorage.getItem('cart') ? 
                JSON.parse(localStorage.getItem('cart')) : []
            

            const card = event.target.closest('.card')
            const key = card.dataset.key

            const index = cart.findIndex((item)=>{
                return item.id === +key
            })
            cart.splice(index, 1)


            localStorage.setItem('cart', JSON.stringify(cart))
            renderCart(cart)
            cartTotal.textContent = cart.reduce((sum, goodItem) =>{
            return sum + goodItem.price
        }, 0)
        }
    })

    cartSendBtn.addEventListener('click', () =>{
        const cart = localStorage.getItem('cart') ? 
                JSON.parse(localStorage.getItem('cart')) : []
        postData(cart).then(()=>{
            localStorage.removeItem('cart')

            renderCart([])
            cartTotal.textContent = 0
        })
    })
    
};


export default cart