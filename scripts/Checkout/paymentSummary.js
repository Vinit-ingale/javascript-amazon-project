import { cart } from "../../data/cart.js"; 
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js"; 
import { formatCurancy } from "../utils/money.js";   

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

            <button class="place-order-button button-primary">
                Place your order
            </button>
    `;

    document.querySelector('.js-payment-summary').innerHTML=paymentSummaryHTML;
}
