app.component('product-display', {
    props: {
      premium: {
        type: Boolean,
        required: true,
      }
    },
    template:
      /*html*/
      `
      <img height="200" v-bind:src="image" />
      <div>
        <span
          v-for="(carouselImage, index) in carouselImages"
          :key="carouselImage.id"
          @mouseover="updateSelectedImage(index)"
        >
          <img height="50" alt="{{ carouselImage.text }}" :src="carouselImage.image"/>
        </span>
      </div>
      <p v-if="stock > 10">Disponible</p>
      <p v-else-if="stock <= 10 && inStock">Peu de stock</p>
      <p v-else>Plus de stock</p>
      <p v-show="onSale">En Vente !</p>
      <product-details :details="details"></product-details>
      <p>Shipping: {{ shipping }}</p>
      <button
        @click="addToCart"
        :style="styles.roundButton"
        :disabled="!inStock"
        :class="{ disabledButton: !inStock }"
      >
        Ajouter au panier
      </button>
      `,
    data() {
      return {
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
        styles: {
          roundButton: {
            borderRadius: '20px',
            padding: '10px',
            backgroundColor: 'rgb(0, 114, 180)',
            color: 'white',
            cursor: 'pointer'
          }
        },
      }
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
      image() {
        return this.carouselImages[this.selectedImage].image
      },
      inStock() {
        return this.stock > 0
      },
      shipping() {
        if (this.premium) {
          return 'Free'
        }
        return 2.99
      }
    }
  });