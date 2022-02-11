export default {
    state() {
        return  {
            items: [],
            total: 0,
            qty: 0 
        }
    },
    mutations: {
        addProductToCart(state, payload) {
            const productData = payload.product
            const productInCartIndex = state.items.findIndex(
              (ci) => ci.productId === productData.id
            );
      
            if (productInCartIndex >= 0) {
              state.items[productInCartIndex].qty++;
            } else {
              const newItem = {
                productId: productData.id,
                title: productData.title,
                image: productData.image,
                price: productData.price,
                qty: 1,
              };
              state.items.push(newItem);
            }
            state.qty++;
            state.total += productData.price;
          },
      
          removeProductFromCart(state, payload) {
              const prodId = payload.productId
            const productInCartIndex = this.cart.items.findIndex(
              (cartItem) => cartItem.productId === prodId
            );
            const prodData = state.items[productInCartIndex];
            stateitems.splice(productInCartIndex, 1);
            stateqty -= prodData.qty;
            statetotal -= prodData.price * prodData.qty;
          },
          actions: {
             addToCart(context, payload){
                context.commit('addProductToCart', payload)
             },
             removeFromCart(context, payload) {
                context.commit('removeProductFromCart', payload)
             }
          },
          getters: {
              products() {
                    return state.items
              },
              totalSum() {
                return state.total
              },
              quantity(){
                  return state.qty
              }
          }
    }
}