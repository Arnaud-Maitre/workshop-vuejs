const app = Vue.createApp({
  data () {
    return {
      title: 'Achat de café Nespresso',
      description: 'Café Colombia',
      image: 'assets/images/colombia.png',
      inStock: 8,
      onSale: true,
      details: ['Doux', 'Harmonieux'],
      carouselImages: [
        {
          id: 1,
          text: 'Capsule 1',
          image: './assets/images/colombia.png',
        },
        {
          id:  2,
          text: 'Capsule 2',
          image: './assets/images/colombia_de_cote.png',
        },
        {
          id: 3,
          text: 'Tasse',
          image: './assets/images/colombia_tasse.png',
        },
        {
          id: 4,
          text: 'Paquet',
          image: './assets/images/colombia_paquet.png',
        }
      ],
      cart: 0,
    };
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateImage(image) {
      this.image = image
    }
  },
});