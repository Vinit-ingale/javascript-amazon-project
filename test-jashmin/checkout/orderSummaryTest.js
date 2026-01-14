import { renderOrderSummary } from "../../scripts/Checkout/orderSummary.js";   
import { loadFromStorage,cart} from "../../data/cart.js";    
import { loadProduct } from "../../data/products.js";

describe('test suite : renderOderSummary',()=>{
       const productId1='e43638ce-6aa0-4b85-b27f-e1d07eb678c6'

       beforeAll((done)=>{
        loadProduct(()=>{
            done();
        });
 
       })

     beforeEach(()=>{ 
            spyOn(localStorage,'setItem')
       
        document.querySelector('.js-test-container').innerHTML=`
        <div class="js-order-summary"></div>
        `;
          
      
         spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([{
                productId:productId1,
                quantity:2,
                deliveryOptionId:'1'
            },{
                productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity:1,
                deliveryOptionId:'2'
            }]);
           });
         
           loadFromStorage();
           renderOrderSummary();

     })



   it ('displays the cart',()=>{
        

         expect( 
             document.querySelectorAll('.js-cart-item-container').length
        ).toEqual(2)
        const productQuantityHTML = document.querySelector(`.js-product-quantity-${productId1}`).innerHTML;
        expect(productQuantityHTML).toContain('Quantity:');
        expect(document.querySelector(`.js-product-quantity-${productId1} .quantity-label`).innerHTML).toEqual('2');

          document.querySelector('.js-test-container').innerHTML='';
   })
     
   it('removes a product',()=>{
       

           document.querySelector(`.js-delete-link-${productId1}`).click();
           expect( 
             document.querySelectorAll('.js-cart-item-container').length
        ).toEqual(1);
        expect(
        document.querySelector(`.js-cart-item-container-${productId1}`)
        ).toEqual(null)

        expect(cart.length).toEqual(1)
        
         document.querySelector('.js-test-container').innerHTML='';
   })
})