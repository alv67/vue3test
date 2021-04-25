const app = Vue.createApp({
  data() {
    return {
      product: 'Calzini',
      description: 'Un fantastico paio di calzini comodi e colorati.',
      image: './assets/images/socks_green.jpg',
      url: 'http://www.google.com/',
      inventory: 8,
      onSale: true
    }
  }
})
