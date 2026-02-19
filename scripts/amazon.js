import { cart,addtocart } from '../data/cart.js';
import { products,loadProduct } from '../data/products.js';
import { formatCurancy } from './utils/money.js';



loadProduct(renderProductGrid);

function renderProductGrid(){

let productHTML='';

  const url = new URL(window.location.href);
  const search = url.searchParams.get('search');

  let filterdProducts=products;

  if(search){
    filterdProducts=products.filter((products)=>{
       return products.name.includes(search);
    })
  }

  filterdProducts.forEach((products)=>{
   productHTML=productHTML+   `   <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${products.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${products.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="${products.getStarurl()}">
            <div class="product-rating-count link-primary">
              ${products.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${products.getPrice()}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${products.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          
          ${
            products.extraInfoHTML()
          }

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${products.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${products.id}">
            Add to Cart
          </button>
        </div>`
        
})

document.querySelector('.js-product-grid').innerHTML=productHTML;

    function updateCartQuantity(){
       let cartQuntity=0;
      cart.forEach((cartItem)=>{
        cartQuntity+=cartItem.quantity
      });
        document.querySelector('.js-cart-quantity').innerHTML=cartQuntity;
      console.log(cart)
    }
    updateCartQuantity();

document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
    button.addEventListener('click',()=>{
      const productId=button.dataset.productId;

       let quantityselector= document.querySelector(`.js-quantity-selector-${productId}`)
       const quantity=Number(quantityselector.value);
       
       addtocart(productId,quantity)
       updateCartQuantity()
       

    let addedMassage=document.querySelector(`.js-added-to-cart-${productId}`)
           addedMassage.classList.add('added')
    setTimeout(() => {
        addedMassage.classList.remove('added')
    }, 1000);
    clearTimeout()
    }); 
});
 document.querySelector('.js-search-button')
    .addEventListener('click', () => {
      const search = document.querySelector('.js-search-bar').value;
      window.location.href = `amazon.html?search=${search}`;
    });

}