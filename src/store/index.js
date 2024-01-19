import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      cart: JSON.parse(localStorage.getItem("myCart")) || [],
      cartLength: JSON.parse(localStorage.getItem("myCart"))?.length || 0,
    };
  },
  mutations: {
    addToCart(store, payload) {
      let existId = store.cart.findIndex((e) => e.id == payload.id);
      let newArr = [];
      if (existId >= 0) {
        newArr = store.cart.map((e) => {
          if (e.id == payload.id) {
            e.qty += payload.qty;
          }
          return e;
        });
        localStorage.setItem("myCart", JSON.stringify(newArr));
      } else {
        // newArr = [...store.cart, payload];
        store.cart.push(payload);
        store.cartLength++;
        localStorage.setItem("myCart", JSON.stringify(store.cart));
      }
    },
    updateCart(store, payload) {
      localStorage.setItem("myCart", JSON.stringify(payload));
    },
    removeFromCart(store, payload) {
      const exist = store.cart.findIndex((e) => e.id == payload);
      if (exist != -1) {
        store.cart.splice(exist, 1);
        store.cartLength--;
        localStorage.setItem("myCart", JSON.stringify(store.cart));
      }
    },
  },
  actions: {
    addToCart(context, data) {
      context.commit("addToCart", data);
    },
    updateCart(context, data) {
      context.commit("updateCart", data);
    },
    removeFromCart(context, data) {
      context.commit("removeFromCart", data);
    },
  },
});

export default store;
