const app = Vue.createApp({
  data() {
    return {
      title: 'Achat de café Nespresso',
      description: 'Café Colombia',
      image: 'assets/images/colombia.png',
      inStock: 12,
      onSale: true,
      details: [
        {
          id: 0,
          text: 'Doux',
          color: '#6C99C6',
        },
        {
          id: 1,
          text: 'Harmonieux',
          color: '#BF9E74',
        },
      ],
      carouselImages: [
        {
          id: 1,
          text: 'Capsule 1',
          image: './assets/images/colombia.png',
        },
        {
          id: 2,
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
      styles: {
        roundButton: {
          borderRadius: '20px',
          padding: '10px',
          backgroundColor: 'rgb(0, 114, 180)',
          color: 'white',
          cursor: 'pointer'
        }
      },
    };
  },
  methods: {
    addToCart() {
      this.cart += 1
      this.inStock -= 1
    },
    updateImage(image) {
      this.image = image
    }
  },
});