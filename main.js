const app = Vue.createApp({
  data() {
    return {
      action: 'Achat de café',
      brand: 'Nespresso',
      cart: [],
      premium: false,
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    },
  },
  computed: {
    title() {
      return this.action + ' ' + this.brand
    },
  }
});