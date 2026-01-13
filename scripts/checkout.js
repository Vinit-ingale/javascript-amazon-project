import {renderCheckoutHeader} from './Checkout/checkoutHeader.js';
import { renderOrderSummary } from './Checkout/orderSummary.js';   
import { renderPaymentSummary } from './Checkout/paymentSummary.js';
//import '../data/cart-class.js'
import '../data/car.js'
import '../data/Backend-practice.js'
import { loadProduct } from '../data/products.js';

loadProduct(()=>{
    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();

});

