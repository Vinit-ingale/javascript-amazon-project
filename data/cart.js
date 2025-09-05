export const cart=[
    
];

export function addtocart(productId,quantity){
  let matchingItem;

      cart.forEach((cartItem)=>{
        if(productId===cartItem.productId){
          matchingItem=cartItem; 
        }
      })

      if(matchingItem){
        matchingItem.quantity+=quantity;
      }else{
        cart.push({
        productId:productId,
        quantity:quantity
      });
      }
    }