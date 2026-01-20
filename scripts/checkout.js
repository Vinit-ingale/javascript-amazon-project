import {renderCheckoutHeader} from './Checkout/checkoutHeader.js';
import { renderOrderSummary } from './Checkout/orderSummary.js';   
import { renderPaymentSummary } from './Checkout/paymentSummary.js';
//import '../data/cart-class.js'
//import '../data/car.js'
import '../data/Backend-practice.js'
import { loadProduct , loadProductFetch} from '../data/products.js';
import { loadCart } from '../data/cart.js';


Promise.all([
    loadProductFetch(),
    new Promise ((resolve)=>{
    loadCart(()=>{
        resolve();
    });
   })

]).then(()=>{
     renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();
})

/*
new Promise((resolve)=>{
    loadProduct(()=>{
        resolve('value1');
    });

}).then((value)=>{
    console.log(value)
   return new Promise ((resolve)=>{
    loadCart(()=>{
        resolve();
    });
   });
}).then(()=>{
      renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();

})
    */

/*
loadProduct(()=>{
    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();

});
*/
