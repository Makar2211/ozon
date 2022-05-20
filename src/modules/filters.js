import getData from './getData';
import renderGoods from './renderGoods';
import { priceFilter, hotSakeFilter } from "./filter";

const filters = () =>{
    const minInput = document.getElementById('min')
    const maxInput = document.getElementById('max')
    const checkboxInput = document.getElementById('discount-checkbox')
    const checkBoxSpan = document.querySelector('.filter-check_checkmark')
    minInput.addEventListener('input', ()=>{
        getData().then((data)=>{
            renderGoods(priceFilter(hotSakeFilter(data, checkboxInput.checked), minInput.value, maxInput.value ));
         })
    })
    maxInput.addEventListener('input', ()=>{
        getData().then((data)=>{
            renderGoods(priceFilter(hotSakeFilter(data, checkboxInput.checked), minInput.value, maxInput.value ));
         })
    })

    checkboxInput.addEventListener('change', () =>{
        if (checkboxInput.checked){
            checkBoxSpan.classList.add('checked')
        } else{
            checkBoxSpan.classList.remove('checked')
        }

        getData().then((data)=>{
            renderGoods(priceFilter(hotSakeFilter(data, checkboxInput.checked), minInput.value, maxInput.value ));
         })
    })
}


export default filters