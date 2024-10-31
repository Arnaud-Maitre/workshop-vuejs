const app = Vue.createApp({
  data() {
    return {
      action: 'Achat de café',
      brand: 'Nespresso',
      cart: 0,
      premium: false,
    };
  },
  methods: {
  },
  computed: {
    title() {
      return this.action + ' ' + this.brand
    },
  }
});