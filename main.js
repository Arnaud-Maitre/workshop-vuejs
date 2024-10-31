const app = Vue.createApp({
  data() {
    return {
      action: 'Achat de café',
      brand: 'Nespresso',
      description: 'Café Colombia',
      selectedImage: 0,
      stock: 12,
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
      this.stock -= 1
    },
    updateSelectedImage(index) {
      this.selectedImage = index
    },
  },
  computed: {
    title() {
      return this.action + ' ' + this.brand
    },
    image() {
      return this.carouselImages[this.selectedImage].image
    },
    inStock() {
      return this.stock > 0
    },
  }
});