import { cart } from "../../data/cart.js"; 
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js"; 
import { formatCurancy } from "../utils/money.js";   
import { addOrder } from "../../data/order.js";

export function renderPaymentSummary(){
     let productpriceinCents=0;
     let shippingPriceinCents=0;

    cart.forEach((cartItem)=>{
       const product= getProduct(cartItem.productId)
       productpriceinCents+= product.priceCents*cartItem.quantity

      const deliveryOption=  getDeliveryOption(cartItem.deliveryOptionId);
      shippingPriceinCents+= deliveryOption.priceCents
    });

    const totalbrforeTaxcents=productpriceinCents+shippingPriceinCents;
    const taxCents=totalbrforeTaxcents*0.1;
    const totalCents=totalbrforeTaxcents+taxCents;
    
    const paymentSummaryHTML=`
      <div class="payment-summary-title">
            Order Summary
      </div>

            <div class="payment-summary-row">
                <div class="js-item-quantity">Items (${cart.length}):</div>
                <div class="payment-summary-money">$${formatCurancy(productpriceinCents)}</div>
            </div>

            <div class="payment-summary-row">
                <div>Shipping &amp; handling:</div>
                <div class="payment-summary-money">$${formatCurancy(shippingPriceinCents)}</div>
            </div>

            <div class="payment-summary-row subtotal-row">
                <div>Total before tax:</div>
                <div class="payment-summary-money">$${formatCurancy(totalbrforeTaxcents)}</div>
            </div>

            <div class="payment-summary-row">
                <div>Estimated tax (10%):</div>
                <div class="payment-summary-money">$${formatCurancy(taxCents)}</div>
            </div>

            <div class="payment-summary-row total-row">
                <div>Order total:</div>
                <div class="payment-summary-money">$${formatCurancy(totalCents)}</div>
            </div>

            <button class="place-order-button button-primary js-place-order-button">
                Place your order
            </button>
    `;

    document.querySelector('.js-payment-summary').innerHTML=paymentSummaryHTML;

    document.querySelector('.js-place-order-button').addEventListener('click',async ()=>{
        try{
          const response = await fetch('https:///supersimplebackend.dev/orders',{
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({
                cart: cart
            })
        })

     const order = await response.json()
     addOrder(order)
        }catch(error){
          console.log('Unexpected error Tryy again later')
        }

      window.location.href='orders.html';
    })
}

