import getData from "./getData";
import renderGoods from "./renderGoods";
import { categoryFilter } from "./filter";

const catalog = () =>{
    const BtnCatalog = document.querySelector('.catalog-button > button')
    const catalogModal = document.querySelector('.catalog')
    const catalogModalItems = document.querySelectorAll('.catalog  li')

    let isopen = false
    
    BtnCatalog.addEventListener('click', () => {
        isopen = !isopen

        if(isopen ){
            catalogModal.style.display = 'block'
        } else{
            catalogModal.style.display = ''
        }
    })

    catalogModalItems.forEach(item =>{
        item.addEventListener('click', ()=>{
            const text = item.textContent
            getData().then((data)=>{
                renderGoods(categoryFilter(data, text));
             })
        })
    })
}

export default catalog