import { getOrder } from "../data/order.js";   
import { getProduct,loadProductFetch } from "../data/products.js";
import daysjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import { cart } from "../data/cart.js";

   let cartQuantity=0;
    cart.forEach((cartItem)=>{
        cartQuantity+=cartItem.quantity;

    });

async function loadPage(){
    await loadProductFetch();

    const url=new URL(window.location.href);
    const orderId=url.searchParams.get('orderId');
    const productId=url.searchParams.get('productId');

    const order=getOrder(orderId);
    const product=getProduct(productId);

 

    let productDetails;
    order.products.forEach((details)=>{
        if(details.productId===product.id){
            productDetails=details;
        }
    });

       const today=daysjs();
    const orderTime=daysjs(order.orderTime);
    const deliveryTime=daysjs(productDetails.estimatedDeliveryTime);
    const percentProgress=((today-orderTime)/(deliveryTime-orderTime))*100;

    const trackingHTML=`
      <a class="back-to-orders-link link-primary" href="orders.html">
          View all orders
        </a>

        <div class="delivery-date">
          Arriving on ${
            daysjs(productDetails.estimatedDeliveryTime).format('MMMM D')
            
          }
        </div>

        <div class="product-info">
          ${product.name}
        </div>

        <div class="product-info">
          Quantity: ${productDetails.quantity}
        </div>

        <img class="product-image" src="${product.image}">

        <div class="progress-labels-container">
          <div class="progress-label  ${percentProgress<50? 'current-status':''}">
           
            preparing
          </div>
          <div class="progress-label ${ percentProgress>=50 && percentProgress<100? 'current-status':''}">
            Shipped
          </div>
          <div class="progress-label ${percentProgress>=100? 'current-status':''}">
            Delivered
          </div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar" style="width:${percentProgress}%;"></div>
        </div>
    `

    document.querySelector('.js-tracking-container').innerHTML=trackingHTML;
     document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
 
 console.log(productDetails)
}
loadPage()

  