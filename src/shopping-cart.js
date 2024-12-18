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
      (acc, curr, index) => `${acc}\n ${index}. ${curr},`,
      `Корзина, общая стоимость ${this.totalPrice} USD, состав: `
    );
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  toString() {
    return `${this.name} - ${this.price} USD`;
  }
}

class Menu {
  products = [
    new Product('Гавайская', 22),
    new Product('Ранч пицца', 10),
    new Product('Пепперони', 40),
  ];

  toString() {
    return this.products.reduce(
      (acc, curr, index) => `${acc}\n ${index}. ${curr.name} ${curr.price},`,
      'Меню: '
    );
  }

  getProduct(index) {
    if (index >= 0 && index < this.products.length) {
      return this.products[index];
    } else {
      throw new Error(`Товара под номером = ${index} нет в меню`);
    }
  }
}

const menu = new Menu();
const cart = new Cart();

while (true) {
  console.log(menu.toString());

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
    const product = menu.getProduct(num);

    cart.addItem(product);

    alert(`Продукт ${product.name} добавлен в корзину`);
  }
}

console.log(cart.toString());
