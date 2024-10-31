const app = Vue.createApp({
  data: function () {
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
        },
        {
          id: 2,
          text: 'Capsule 2',
        },
        {
          id: 3,
          text: 'Tasse',
        },
        {
          id: 4,
          text: 'Paquet',
        }
      ],
    };
  },
});