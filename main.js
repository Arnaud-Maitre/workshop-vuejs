const app = Vue.createApp({
    data: function () {
      return {
        title: 'Achat de café Nespresso',
        description: '[Une description]',
        image: 'assets/images/colombia.png',
        inStock: 8,
        onSale: true,
      };
    },
  });