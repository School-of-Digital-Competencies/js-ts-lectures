class Cart {
  constructor() {
    this.items = [];
  }

  get totalPrice() {
    return this.items.reduce((acc, curr) => (acc += curr.price), 0);
  }

  addItem(item) {
    this.items.push(item);
  }

  toString() {
    return this.items.reduce(
      (acc, curr) => `${acc}\n ${curr},`,
      `Корзина, общая стоимость ${this.totalPrice} USD, состав: `
    );
  }
}

class Product {
  constructor(id, title, price) {
    this.id = id;
    this.title = title;
    this.price = price;
  }

  toString() {
    return `#${this.id} ${this.title} - ${this.price} USD`;
  }
}

class Menu {
  baseUrl = 'https://dummyjson.com/products';

  async getProducts(limit = 30, skip = 0) {
    const response = await fetch(`${this.baseUrl}?limit=${limit}&skip=${skip}`);
    const data = await response.json();

    return data.products.map(
      (item) => new Product(item.id, item.title, item.price)
    );
  }

  async getProduct(id) {
    const response = await fetch(`${this.baseUrl}/${id}`);
    const data = await response.json();

    return new Product(data.id, data.title, data.price);
  }

  async toString() {
    const products = await this.getProducts();

    return products.reduce(
      (acc, curr, index) => `${acc}\n ${index}. ${curr.title} ${curr.price},`,
      'Меню: '
    );
  }
}

// IFFE
(async () => {
  const menu = new Menu();
  const cart = new Cart();

  while (true) {
    console.log(await menu.toString());

    const request = prompt(
      'Введите номер позиции из меню. Введите -1 чтобы завершить заказ'
    );

    if (!request) {
      console.log('Корзина заказа сформирована');
      break;
    }

    const num = Number(request);

    if (num === -1) {
      console.log('Корзина заказа сформирована');
      break;
    } else {
      const product = await menu.getProduct(num);

      cart.addItem(product);

      alert(`Продукт ${product.title} добавлен в корзину`);
    }
  }

  console.log(cart.toString());
})();
